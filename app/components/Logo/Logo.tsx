import Image from "next/image";
import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image
                src="/icons/logo.svg"
                alt="INCHAPIN"
                width={187}
                height={30}
                priority
            />
        </div>
    );
}
