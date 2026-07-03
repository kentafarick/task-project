import Image from "next/image";
import styles from "./AboutContent.module.scss";

export default function AboutContent() {
    return (
        <div className={styles.content}>
            <Image
                src="/images/vector.png"
                alt=""
                width={40}
                height={6}
                className={styles.vector}
            />

            <h2 className={styles.title}>
                УЮТНОЕ И БЕЗОПАСНОЕ
                <br />
                ПРОСТРАНСТВО ДЛЯ СЧАСТЛИВОЙ,
                <br />
                <span>СПОКОЙНОЙ И РАЗМЕРЕННОЙ</span>
                <br />
                <span>ЖИЗНИ</span>
            </h2>

            <p className={styles.text}>
                <span>
                    КВАРТИРЫ ОТ 65 ДО 356 М² С ЧИСТОВОЙ ОТДЕЛКОЙ,
                </span>
                <br />
                БАЛКОНАМИ, ЛОДЖИЯМИ И ТЕРРАСАМИ В СОБСТВЕННОЙ
                <br />
                ЗАКРЫТОЙ ОХРАНЯЕМОЙ ТЕРРИТОРИИ.
            </p>
        </div>
    );
}