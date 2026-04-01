# Secure Login UX Case Study

A small frontend project exploring a simple question:

**How much should a login form actually tell the user?**

---

## What this is

This app simulates a login flow with two modes:

* **Friendly** → specific, helpful feedback
* **Secure** → generic, safer feedback

Same input → same auth result → different message depending on mode.

---

## Try it

Use these credentials:

**Valid login**

* Email: `demo@example.com`
* Password: `Password123`

**Test cases**

* Wrong password
  → correct email + wrong password

* Account not found
  → any other email

* Too many attempts
  → repeat failed attempts

Switch between **Friendly** and **Secure** to see how the feedback changes.

---

## Flow

```text
Submit form
→ validate input
→ simulate auth
→ apply message policy
→ display feedback
```

The key idea:

> The system result is not always what the user should see.

---

## Structure

```
app/
components/
  login/
    login-form.tsx
    mode-toggle.tsx
    feedback-message.tsx
lib/
  validation.ts
  fake-auth.ts
  auth-message-policy.ts
  types.ts
```

---

## Key parts

* `fake-auth.ts`
  Simulates backend responses

* `auth-message-policy.ts`
  Decides what the user sees based on mode

* `login-form.tsx`
  Connects everything together

---

## Why this matters

Login feedback seems simple, but it involves tradeoffs:

* Too much information → security risk
* Too little information → bad UX

This project isolates that decision in the frontend.

---

## Notes

* No real backend (fully simulated)
* UI intentionally simple
* Focus is on behavior, not design

---

## Takeaway

Frontend is not just about displaying data —
it's about deciding **how much to communicate, and when**.
