import styles from "./CallbackButton.module.scss";

interface CallbackButtonProps {
    onClick?: () => void;
}

export default function CallbackButton({ onClick }: CallbackButtonProps) {
    return (
        <button
            type="button"
            className={styles.button}
            onClick={onClick}
        >
            Заказать звонок
        </button>
    );
}