import FeedbackMessage from "./feedback-message";

export default function LoginForm() {
    return (
        <section>
            <h1>Login</h1>

            {/* Mode toggle placeholder */}
            <div>
                <p>Mode: Secure | Friendly</p>
            </div>

            {/* Form */}
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>

                <button type="submit">Log in</button>
            </form>

            {/* Feedback placeholder */}
            <FeedbackMessage message="" />
        </section>
    );
}