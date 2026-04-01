"use client";

import { useState } from "react";

import { getAuthMessage } from "@/lib/auth-message-policy";
import { fakeAuth } from "@/lib/fake-auth";
import type { FormErrors, Mode } from "@/lib/types";
import { validateLoginForm } from "@/lib/validation";

import FeedbackMessage from "./feedback-message";
import styles from "./login-form.module.scss";
import ModeToggle from "./mode-toggle";

export default function LoginForm() {
    const [mode, setMode] = useState<Mode>("secure");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [feedback, setFeedback] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [attemptCount, setAttemptCount] = useState(0);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setFeedback("");

        const validationErrors = validateLoginForm({ email, password });
        setErrors(validationErrors);

        const hasErrors = Object.keys(validationErrors).length > 0;

        if (hasErrors) {
            return;
        }
        setIsLoading(true);

        const authResult = await fakeAuth({
            email,
            password,
            attemptCount,
        });

        setIsLoading(false);
        if (authResult.success) {
            setAttemptCount(0);
        } else {
            setAttemptCount((current) => current + 1);
        }
        const message = getAuthMessage({
            mode,
            reason: authResult.reason,
        });
        setFeedback(message);

        console.log(authResult);
    }

    return (
        <section>
            <h1>Login</h1>

            <ModeToggle mode={mode} onChange={setMode} />

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button type="submit">{isLoading ? "Loading..." : "Log in"}</button>
            </form>
            <FeedbackMessage message={feedback} />
        </section>
    );
}