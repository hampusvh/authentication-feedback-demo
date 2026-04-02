import styles from "./feedback-message.module.scss";

type FeedbackVariant = "success" | "error" | "info";
interface FeedbackMessageProps {
    message: string;
    variant: FeedbackVariant;
}

export default function FeedbackMessage({
    message,
    variant,
}: FeedbackMessageProps) {
    if (!message) {
        return null;
    }

    return (
        <div
            className={styles.feedback}
            aria-live="polite"
            role={variant === "error" ? "alert" : "status"}
        >
            <p className={`${styles.text} ${styles[variant]}`}>{message}</p>
        </div>
    )
}