import Button from "../ui/Button/Button";
import styles from "./FeedbackButton.module.scss";

type CallbackButtonProps = {
    onClick: () => void;
};

export default function CallbackButton({
    onClick,
}: CallbackButtonProps) {
    return (
        <Button
            variant="ghost"
            className={styles.button}
            onClick={onClick}
        >
            <span className={styles.textWrapper}>
                <span className={styles.text}>
                    <span>Заказать звонок</span>
                    <span>Заказать звонок</span>
                </span>
            </span>
        </Button>
    );
}