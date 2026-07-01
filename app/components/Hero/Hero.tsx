import Image from "next/image";
import Container from "../Container/Container";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Container>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/hero.jpg"
                        alt="INCHAPIN"
                        fill
                        priority
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>

                    <div className={styles.left}>
                        <p>
                            Дом бизнес-класса
                            <br />
                            для ценителей роскоши
                        </p>
                    </div>

                    <div className={styles.right}>
                        <h1>INCHAPIN</h1>
                    </div>

                </div>

                <button className={styles.about}>
                    О ПРОЕКТЕ
                </button>

            </Container>
        </section>
    );
}