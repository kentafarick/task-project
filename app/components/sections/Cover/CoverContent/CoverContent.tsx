import Image from "next/image";
import styles from "./CoverContent.module.scss";

export default function CoverContent() {
    return (
        <div className={styles.content}>
            <p className={styles.text}>
                Дом бизнес-класса
                <br />
                для ценителей роскоши
            </p>

            <p className={styles.projectLabel}>
                О ПРОЕКТЕ
            </p>

            <Image
                src="/icons/biglogo.svg"
                alt="INCHAPIN"
                width={862}
                height={137}
                priority
                className={styles.logo}
            />
        </div>
    );
}