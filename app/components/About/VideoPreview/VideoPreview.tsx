import Image from "next/image";
import styles from "./VideoPreview.module.scss";

export default function VideoPreview() {
    return (
        <button type="button" className={styles.video}>
            <span className={styles.info}>
                <span className={styles.label}>
                    ВИДЕО О ПРОЕКТЕ
                </span>

                <span className={styles.time}>
                    1:25 минут
                </span>
            </span>

            <span className={styles.line} />

            <span className={styles.preview}>
                <Image
                    src="/images/video-preview.png"
                    alt="Видео о проекте"
                    fill
                    className={styles.image}
                />

                <span className={styles.circle} />

                <span className={styles.play}>
                    <Image
                        src="/icons/play.svg"
                        alt=""
                        width={62}
                        height={28}
                        className={styles.playImage}
                    />
                </span>
            </span>
        </button>
    );
}