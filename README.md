# Secure Login UX Case Study

A small frontend case study exploring how authentication feedback impacts user experience and security.

**How much should a login form actually tell the user?**

This project demonstrates how different feedback strategies affect both usability and security perception.

---

## What this is

This app simulates a login flow with two modes:

* **Friendly** → specific, helpful feedback  
* **Secure** → generic, safer feedback  

Same input → same authentication result → different message depending on mode.

---

## Try it

Use the following credentials to test different scenarios:

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

Switch between **Friendly** and **Secure** to compare how the feedback changes.

---

## Flow

```text
Submit form
→ validate input
→ simulate authentication
→ apply feedback strategy
→ display feedback
```

The key idea:

> The system result is not always what the user should see.

---

## Project structure

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
  Simulates authentication responses  

* `auth-message-policy.ts`  
  Determines what the user sees based on selected mode  

* `login-form.tsx`  
  Connects validation, auth simulation, and feedback logic  

---

## Why this matters

Login feedback seems simple, but it involves real tradeoffs:

* Too much information → increased attack surface  
* Too little information → poor user experience  

This project isolates that decision in the frontend.

---

## Notes

* No real backend (fully simulated)  
* UI intentionally minimal  
* Focus is on behavior, not design

---

## Takeaway

Frontend is not just about displaying data —  
it's about deciding **what to communicate, how, and when**.
