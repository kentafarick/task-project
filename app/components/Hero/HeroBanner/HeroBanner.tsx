import Image from "next/image";

import styles from "./HeroBanner.module.scss";

export default function HeroBanner() {
    return (
        <div className={styles.banner}>
            <Image
                src="/images/hero.jpg"
                alt="Дом Inchapin"
                fill
                priority
                className={styles.image}
            />
        </div>
    );
}