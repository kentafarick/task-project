"use client";

import { FormEvent, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import PhoneInput from "../ui/PhoneInput/PhoneInput";
import { useEscape } from "../../hooks/useEscape";
import { useLockBody } from "../../hooks/useLockBody";
import styles from "./FeedbackModal.module.scss";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";

type CallbackModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEscape(isOpen, onClose);
    useLockBody(isOpen);

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
                <Button
                    variant="ghost"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Закрыть форму"
                >
                    <span />
                    <span />
                </Button>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2 className={styles.title}>
                        Заказать звонок
                    </h2>

                    <Input
                        label="Ваше имя"
                        type="text"
                        value={name}
                        filled={Boolean(name)}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                        autoComplete="name"
                    />

                    <PhoneInput
                        label="Телефон"
                        value={phone}
                        onAccept={setPhone}
                        name="phone"
                        autoComplete="tel"
                        required
                    />

                    <Input
                        label="E-mail"
                        type="email"
                        value={email}
                        filled={Boolean(email)}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                        autoComplete="email"
                    />

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