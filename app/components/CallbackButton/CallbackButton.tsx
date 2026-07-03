import styles from "./CallbackButton.module.scss";

type CallbackButtonProps = {
    onClick: () => void;
};

export default function CallbackButton({ onClick }: CallbackButtonProps) {
    return (
        <button
            type="button"
            className={styles.button}
            onClick={onClick}
        >
            <span className={styles.textWrapper}>
                <span className={styles.text}>
                    <span>Заказать звонок</span>
                    <span>Заказать звонок</span>
                </span>
            </span>
        </button>
    );
}