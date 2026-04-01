import { AUTH_CONFIG } from "./auth-config";
import type { AuthResult } from "./types";

interface FakeAuthInput {
    email: string;
    password: string;
    attemptCount: number;
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fakeAuth({
    email,
    password,
    attemptCount,
}: FakeAuthInput): Promise<AuthResult> {
    await sleep(AUTH_CONFIG.delayMs);

    if (attemptCount >= AUTH_CONFIG.maxAttempts) {
        return {
            success: false,
            reason: "TOO_MANY_ATTEMPTS",
        };
    }

    if (email !== AUTH_CONFIG.validEmail) {
        return {
            success: false,
            reason: "ACCOUNT_NOT_FOUND",
        };
    }

    if (password !== AUTH_CONFIG.validPassword) {
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
