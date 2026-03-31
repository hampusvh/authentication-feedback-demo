import type { FormErrors } from "./types";

interface ValidateLoginFormInput {
    email: string;
    password: string;
}

export function validateLoginForm({
    email,
    password,
}: ValidateLoginFormInput): FormErrors {
    const errors: FormErrors = {};

    if (!email.trim()) {
        errors.email = "Email is required";
    } else if (!email.includes("@")) {
        errors.email = "Enter a valid email address";
    }
    if (!password.trim()) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }
    return errors;
}