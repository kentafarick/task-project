import styles from "./Burger.module.scss";

export default function Burger() {
    return (
        <button className={styles.burger} type="button" aria-label="Открыть меню">
            <span className={styles.icon}>
                <span />
                <span />
                <span />
            </span>

            <span className={styles.text}>МЕНЮ</span>
        </button>
    );
}