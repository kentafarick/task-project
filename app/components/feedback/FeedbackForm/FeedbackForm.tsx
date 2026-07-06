"use client";

import { type FormEvent, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import PhoneInput from "../../ui/PhoneInput/PhoneInput";
import styles from "./FeedbackForm.module.scss";

export default function FeedbackForm() {
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
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <h2 className={styles.title}>
                Заказать звонок
            </h2>

            <Input
                label="Ваше имя"
                name="name"
                type="text"
                value={name}
                filled={Boolean(name)}
                autoComplete="name"
                required
                onChange={(event) =>
                    setName(event.target.value)
                }
            />

            <PhoneInput
                label="Телефон"
                name="phone"
                value={phone}
                autoComplete="tel"
                required
                onAccept={setPhone}
            />

            <Input
                label="E-mail"
                name="email"
                type="email"
                value={email}
                filled={Boolean(email)}
                autoComplete="email"
                required
                onChange={(event) =>
                    setEmail(event.target.value)
                }
            />

            <p className={styles.policy}>
                Нажимая на кнопку «Отправить», вы ознакомлены
                и соглашаетесь с{" "}
                <span
                    className={styles.policyLink}
                    tabIndex={0}
                >
                    политикой обработки персональных данных

                    <span
                        className={styles.policyTooltip}
                        role="tooltip"
                    >
                        Здесь должна быть ссылка на политику
                        обработки персональных данных
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
    );
}