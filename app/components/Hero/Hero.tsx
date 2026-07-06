import Container from "../layout/Container/Container";
import HeroBanner from "./HeroBanner/HeroBanner";
import HeroContent from "./HeroContent/HeroContent";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Container>
                <HeroBanner />
                <HeroContent />
            </Container>
        </section>
    );
}