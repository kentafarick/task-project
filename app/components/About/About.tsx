import Container from "../Container/Container";
import AboutImage from "./AboutImage/AboutImage";
import AboutContent from "./AboutContent/AboutContent";
import VideoPreview from "./VideoPreview/VideoPreview";
import styles from "./About.module.scss";

export default function About() {
    return (
        <section className={styles.about}>
            <Container>
                <div className={styles.inner}>
                    <AboutImage />

                    <div className={styles.right}>
                        <AboutContent />
                        <VideoPreview />
                    </div>
                </div>
            </Container>
        </section>
    );
}