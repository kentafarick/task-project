"use client";

import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./VideoModal.module.scss";

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            unmountOnExit
            nodeRef={nodeRef}
            classNames={{
                enter: styles.enter,
                enterActive: styles.enterActive,
                exit: styles.exit,
                exitActive: styles.exitActive,
            }}
        >
            <div ref={nodeRef} className={styles.modal}>
                <button
                    type="button"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Закрыть видео"
                >
                    <span />
                    <span />
                </button>

                <video
                    className={styles.video}
                    src="/videos/video-about.mp4"
                    autoPlay
                    muted
                    controls
                    playsInline
                />
            </div>
        </CSSTransition>
    );
}