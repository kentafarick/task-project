"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { IMaskInput } from "react-imask";

import styles from "./CallbackModal.module.scss";

type CallbackModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log({
            name,
            phone,
            email,
        });
    };

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
            <div ref={nodeRef} className={styles.popup}>
                <button
                    type="button"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Закрыть"
                >
                    <span />
                    <span />
                </button>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.title}>
                        Заказать звонок
                    </h2>

                    <label className={`${styles.field} ${name ? styles.filled : ""}`}>
                        <input
                            className={styles.input}
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                        <span className={styles.placeholder}>
                            Ваше имя
                        </span>
                    </label>

                    <label className={`${styles.field} ${phone ? styles.filled : ""}`}>
                        <IMaskInput
                            className={styles.input}
                            mask="+7 (000) 000-00-00"
                            value={phone}
                            onAccept={(value) => setPhone(String(value))}
                        />

                        <span className={styles.placeholder}>
                            Телефон
                        </span>
                    </label>

                    <label className={`${styles.field} ${email ? styles.filled : ""}`}>
                        <input
                            className={styles.input}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <span className={styles.placeholder}>
                            E-mail
                        </span>
                    </label>

                    <p className={styles.policy}>
                        Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь с{" "}
                        <span className={styles.policyLink}>
                            политикой обработки персональных данных

                            <span className={styles.policyTooltip}>
                                ссылка на "политику обработки персональных данных"
                            </span>
                        </span>
                    </p>

                    <button type="submit" className={styles.submit}>
                        Отправить
                    </button>
                </form>
            </div>
        </CSSTransition>
    );
}