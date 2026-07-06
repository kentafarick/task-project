import type { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
};

export default function Button({
    variant = "primary",
    type = "button",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={classNames(
                styles.button,
                styles[variant],
                className,
            )}
            {...props}
        />
    );
}