"use client";

import Modal from "../ui/Modal/Modal";
import styles from "./VideoModal.module.scss";

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function VideoModal({
    isOpen,
    onClose,
}: VideoModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={styles.modal}
            closeClassName={styles.close}
            closeLabel="Закрыть видео"
        >
            <video
                className={styles.video}
                src="/videos/video-about.mp4"
                poster="/images/video-preview.png"
                preload="none"
                autoPlay
                muted
                controls
                playsInline
            />
        </Modal>
    );
}