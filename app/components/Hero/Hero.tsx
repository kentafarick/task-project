import Container from "../Container/Container";

import HeroBanner from "./HeroBanner/HeroBanner";
import HeroContent from "./HeroContent/HeroContent";
import HeroLink from "./HeroLink/HeroLink";

import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Container>
                <HeroBanner />

                <div className={styles.content}>
                    <HeroContent />
                </div>

                <div className={styles.link}>
                    <HeroLink />
                </div>
            </Container>
        </section>
    );
}