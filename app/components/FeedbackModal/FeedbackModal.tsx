"use client";

import { type FormEvent, useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import Modal from "../ui/Modal/Modal";
import PhoneInput from "../ui/PhoneInput/PhoneInput";
import styles from "./FeedbackModal.module.scss";

type CallbackModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CallbackModal({
    isOpen,
    onClose,
}: CallbackModalProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        console.log({
            name,
            phone,
            email,
        });
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={styles.popup}
            closeClassName={styles.close}
            closeLabel="Закрыть форму"
        >
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
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
                    name="name"
                    autoComplete="name"
                    required
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
                    name="email"
                    autoComplete="email"
                    required
                />

                <p className={styles.policy}>
                    Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь с{" "}
                    <span
                        className={styles.policyLink}
                        tabIndex={0}
                    >
                        политикой обработки персональных данных

                        <span
                            className={styles.policyTooltip}
                            role="tooltip"
                        >
                            Ссылка на политику обработки
                            персональных данных
                        </span>
                    </span>
                </p>

                <Button
                    type="submit"
                    variant="primary"
                    className={styles.submit}
                >
                    Отправить
                </Button>
            </form>
        </Modal>
    );
}