"use client";

import { useRef, type PropsWithChildren, } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { useEscape } from "../../../hooks/useEscape";
import { useLockBody } from "../../../hooks/useLockBody";
import Button from "../Button/Button";
import styles from "./Modal.module.scss";

type ModalProps = PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    closeClassName?: string;
    closeLabel?: string;
}>;

export default function Modal({
    isOpen,
    onClose,
    children,
    className,
    closeClassName,
    closeLabel = "Закрыть",
}: ModalProps) {
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
            <div
                ref={nodeRef}
                className={classNames(
                    styles.modal,
                    className,
                )}
                role="dialog"
                aria-modal="true"
            >
                <Button
                    variant="ghost"
                    className={classNames(
                        styles.close,
                        closeClassName,
                    )}
                    onClick={onClose}
                    aria-label={closeLabel}
                >
                    <span />
                    <span />
                </Button>

                {children}
            </div>
        </CSSTransition>
    );
}