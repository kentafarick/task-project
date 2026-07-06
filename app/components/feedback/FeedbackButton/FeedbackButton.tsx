import Button from "../../ui/Button/Button";
import styles from "./FeedbackButton.module.scss";

type FeedbackButtonProps = {
    onClick: () => void;
};

export default function FeedbackButton({
    onClick,
}: FeedbackButtonProps) {
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