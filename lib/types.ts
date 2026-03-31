export type Mode = "secure" | "friendly"

export type AuthResultReason =
    | "SUCCESS"
    | "WRONG_PASSWORD"
    | "ACCOUNT_NOT_FOUND"
    | "TOO_MANY_ATTEMPTS"
    | "SERVER_ERROR";

export interface AuthResult {
    success: boolean;
    reason: AuthResultReason;
}

export interface FormErrors {
    email?: string;
    password?: string;
    form?: string;
}