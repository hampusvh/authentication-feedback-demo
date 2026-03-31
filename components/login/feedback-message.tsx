interface FeedbackMessageProps {
    message: string;
}

export default function FeedbackMessage({
    message,
}: FeedbackMessageProps) {
    if (!message) {
        return null;
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}