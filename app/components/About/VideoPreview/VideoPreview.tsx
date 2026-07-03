import Image from "next/image";
import styles from "./VideoPreview.module.scss";

type VideoPreviewProps = {
    onClick: () => void;
};

export default function VideoPreview({ onClick }: VideoPreviewProps) {
    return (
        <div className={styles.video}>
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
                    sizes="241px"
                    className={styles.image}
                />

                <button
                    type="button"
                    className={styles.playButton}
                    onClick={onClick}
                    aria-label="Смотреть видео"
                >
                    <span className={styles.circle} />

                    <span className={styles.play}>
                        <Image
                            src="/icons/play.svg"
                            alt=""
                            width={46}
                            height={21}
                        />
                    </span>
                </button>
            </span>
        </div>
    );
}