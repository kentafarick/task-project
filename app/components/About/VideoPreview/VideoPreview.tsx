import Image from "next/image";
import styles from "./VideoPreview.module.scss";
import Button from "../../ui/Button/Button";

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

                <Button
                    variant="ghost"
                    className={styles.playButton}
                    onClick={onClick}
                    aria-label="Смотреть видео"
                >
                    <span className={styles.circle} />

                    <span className={styles.play}>
                        <Image
                            src="/images/play.png"
                            alt=""
                            width={46}
                            height={21}
                        />
                    </span>
                </Button>
            </span>
        </div>
    );
}