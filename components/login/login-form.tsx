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
    const [feedbackVariant, setFeedbackVariant] = useState<"success" | "error" | "info">("info");
    const [isLoading, setIsLoading] = useState(false);
    const [attemptCount, setAttemptCount] = useState(0);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setFeedback("");
        setFeedbackVariant("info");

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
            setFeedbackVariant("success");
        } else {
            setAttemptCount((current) => current + 1);
            setFeedbackVariant("error");
        }

        const message = getAuthMessage({
            mode,
            reason: authResult.reason,
        });
        setFeedback(message);

    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.panel}>
                <h1 className={styles.title}>
                    Authentication Feedback Demo
                </h1>
                <p className={styles.subtitle}>
                    Compare how different feedback strategies affect user experience and security.
                </p>

                <ModeToggle mode={mode} onChange={setMode} />
                <p className={styles.helper}>
                    Secure mode reveals less information. Friendly mode provides more specific feedback.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <div className={styles.errorSlot}>
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className={styles.errorSlot}>
                            {errors.password && <p className={styles.errorText}>{errors.password}</p>}
                        </div>
                    </div>
                    <button className={styles.submitButton} type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <span className={styles.loading}>
                                <span className={styles.spinner} />
                                Authenticating...
                            </span>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </form>
                <div className={styles.feedbackArea}>
                    <FeedbackMessage message={feedback} variant={feedbackVariant} />
                </div>
            </div>
        </section>
    );
}