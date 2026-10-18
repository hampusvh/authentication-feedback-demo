# Authentication Feedback Demo

<img
    src="./public/preview.png"
    alt="Authentication form with selectable feedback modes"
    width="400"
  />

A frontend demonstration of how login feedback can disclose account information.

## Overview

The demo presents two feedback modes for the same simulated authentication flow:

- **Friendly** provides specific messages for an unknown email address or an incorrect password.
- **Secure** returns a generic message for either failure.

The comparison illustrates how descriptive feedback can enable account enumeration by revealing whether an email address is associated with an account.

The mode names reflect the interface labels. Neither mode represents a complete authentication security strategy.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Test scenarios

Switch feedback modes and submit the same credentials to compare responses.

| Scenario           | Email                        | Password                                  |
| ------------------ | ---------------------------- | ----------------------------------------- |
| Successful login   | `demo@example.com`           | `Password123`                             |
| Incorrect password | `demo@example.com`           | Any other password that passes validation |
| Unknown account    | `other@example.com`          | Any password that passes validation       |
| Attempt limit      | Repeat failed login attempts | -                                         |

Form validation runs before authentication is simulated.

## Limitations

Authentication and attempt limiting run entirely in the browser. The project does not implement real accounts, sessions or server-side enforcement.
