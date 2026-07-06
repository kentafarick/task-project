"use client";

import classNames from "classnames";
import { IMaskInput } from "react-imask";
import styles from "../Input/Input.module.scss";

type PhoneInputProps = {
    label: string;
    value: string;
    onAccept: (value: string) => void;
    name?: string;
    required?: boolean;
    autoComplete?: string;
};

export default function PhoneInput({
    label,
    value,
    onAccept,
    name,
    required,
    autoComplete,
}: PhoneInputProps) {
    return (
        <label
            className={classNames(
                styles.field,
                Boolean(value) && styles.filled,
            )}
        >
            <IMaskInput
                className={styles.input}
                mask="+7 (000) 000-00-00"
                value={value}
                onAccept={(nextValue) =>
                    onAccept(String(nextValue))
                }
                name={name}
                required={required}
                autoComplete={autoComplete}
            />

            <span className={styles.placeholder}>
                {label}
            </span>
        </label>
    );
}