import type { Mode } from "@/lib/types";
import styles from "./mode-toggle.module.scss";
interface ModeToggleProps {
    mode: Mode;
    onChange: (mode: Mode) => void;
}

export default function ModeToggle({
    mode,
    onChange,
}: ModeToggleProps) {
    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                className={`${styles.option} ${mode === "secure" ? styles.active : ""}`}
                onClick={() => onChange("secure")}
            >
                Secure
            </button>
            <button
                type="button"
                className={`${styles.option} ${mode === "friendly" ? styles.active : ""}`}
                onClick={() => onChange("friendly")}
            >
                Friendly
            </button>
        </div>
    );
}