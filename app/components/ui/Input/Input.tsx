import {
    forwardRef,
    type InputHTMLAttributes,
} from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    filled?: boolean;
    fieldClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            filled = false,
            className,
            fieldClassName,
            ...props
        },
        ref,
    ) => {
        return (
            <label
                className={classNames(
                    styles.field,
                    filled && styles.filled,
                    fieldClassName,
                )}
            >
                <input
                    ref={ref}
                    className={classNames(styles.input, className)}
                    {...props}
                />

                <span className={styles.placeholder}>
                    {label}
                </span>
            </label>
        );
    },
);

Input.displayName = "Input";

export default Input;