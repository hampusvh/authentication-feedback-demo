import type { AuthResult } from "./types";

interface FakeAuthInput {
    email: string;
    password: string;
    attemptCount: number;
}

const VALID_EMAIL = "demo@example.com";
const VALID_PASSWORD = "Password123";

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fakeAuth({
    email,
    password,
    attemptCount,
}: FakeAuthInput): Promise<AuthResult> {
    await sleep(1000);

    if (attemptCount >= 5) {
        return {
            success: false,
            reason: "TOO_MANY_ATTEMPTS",
        };
    }

    if (email !== VALID_EMAIL) {
        return {
            success: false,
            reason: "ACCOUNT_NOT_FOUND",
        };
    }

    if (password !== VALID_PASSWORD) {
        return {
            success: false,
            reason: "WRONG_PASSWORD",
        };
    }

    return {
        success: true,
        reason: "SUCCESS",
    };
}
