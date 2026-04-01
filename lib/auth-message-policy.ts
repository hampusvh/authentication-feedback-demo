import type { AuthResultReason,Mode } from "./types";

interface GetAuthMessageInput {
    mode: Mode;
    reason: AuthResultReason;
}

export function getAuthMessage({
    mode,
    reason,
}: GetAuthMessageInput): string {

    if (mode === "friendly") {
        if (reason === "WRONG_PASSWORD") {
            return "Incorrect password. Try again or reset your password.";
        }

        if (reason === "ACCOUNT_NOT_FOUND") {
            return "No account found with this email";
        }

        if (reason === "TOO_MANY_ATTEMPTS") {
            return "Too many attempts. Please try again later.";
        }

        if (reason === "SERVER_ERROR") {
            return "Something went wrong. Please try again.";
        }

        if (reason === "SUCCESS") {
            return "Login successful.";
        }
    }

    if (mode === "secure") {
        if (reason === "TOO_MANY_ATTEMPTS") {
            return "Too many attempts. Please try again later.";
        }

        if (reason === "SERVER_ERROR") {
            return "Something went wrong. Please try again.";
        }

        if (reason === "SUCCESS") {
            return "Login successful.";
        }

        return "Invalid credentials.";
    }

    return "";
}