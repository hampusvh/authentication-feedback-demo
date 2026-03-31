type Mode = "secure" | "friendly";

interface ModeToggleProps {
    mode: Mode;
    onChange: (mode: Mode) => void;
}

export default function ModeToggle({
    mode,
    onChange,
}: ModeToggleProps) {
    return (
        <div>
            <button type="button" onClick={() => onChange("secure")}>
                Secure
            </button>
            <button type="button" onClick={() => onChange("friendly")}>
                Friendly
            </button>
            <p>Current mode: {mode}</p>
        </div>
    );
}