import Image from "next/image";
import styles from "./AboutImage.module.scss";

export default function AboutImage() {
    return (
        <div className={styles.wrapper}>
            <Image
                src="/images/about.png"
                alt="Дом INCHAPIN"
                width={733}
                height={900}
                priority
                className={styles.image}
            />

            <Image
                src="/images/arrow.png"
                alt=""
                width={259}
                height={259}
                className={styles.arrow}
            />
        </div>
    );
}