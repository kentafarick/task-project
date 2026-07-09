import Container from "../../layout/Container/Container";
import CoverBanner from "./CoverBanner/CoverBanner";
import CoverContent from "./CoverContent/CoverContent";
import styles from "./Cover.module.scss";

export default function Cover() {
    return (
        <section className={styles.cover}>
            <Container>
                <CoverBanner />
                <CoverContent />
            </Container>
        </section>
    );
}