"use client";

import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useEscape } from "../../hooks/useEscape";
import { useLockBody } from "../../hooks/useLockBody";
import styles from "./VideoModal.module.scss";
import Button from "../ui/Button/Button";

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function VideoModal({
    isOpen,
    onClose,
}: VideoModalProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    useEscape(isOpen, onClose);
    useLockBody(isOpen);

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
                <Button
                    variant="ghost"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Закрыть видео"
                >
                    <span />
                    <span />
                </Button>

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