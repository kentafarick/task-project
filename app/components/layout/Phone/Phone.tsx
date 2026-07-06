import styles from "./Phone.module.scss"

export default function Phone() {
    return (
        <a 
            href="tel:+74955272121"
            className={styles.phone}
        >
            +7 495 527 21 21
        </a>
    );
}