import Image from "next/image";
import styles from "./CoverBanner.module.scss";

export default function CoverBanner() {
    return (
        <div className={styles.banner}>
            <Image
                src="/images/hero.png"
                alt="Дом Inchapin"
                fill
                priority
                sizes="(max-width: 1760px) 100vw, 1760px"
                unoptimized
                className={styles.image}
            />
        </div>
    );
}