import styles from "./ApartmentSelect.module.scss";

export default function ApartmentSelect() {
    return (
        <button type="button" className={styles.select}>

            <span className={styles.value}>
                <span className={styles.text}>
                    <span>Выбрать квартиру</span>
                    <span>Выбрать квартиру</span>
                </span>
            </span>

            <span className={styles.arrow}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>

        </button>
    );
}