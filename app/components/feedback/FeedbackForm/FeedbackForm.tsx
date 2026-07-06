"use client";

import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import PhoneInput from "../../ui/PhoneInput/PhoneInput";
import styles from "./FeedbackForm.module.scss";

type FeedbackFormValues = {
    name: string;
    phone: string;
    email: string;
};

export default function FeedbackForm() {
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { isSubmitting },
    } = useForm<FeedbackFormValues>({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
    });

    const name = watch("name");
    const email = watch("email");

    const onSubmit: SubmitHandler<FeedbackFormValues> = (
        data,
    ) => {
        console.log(data);
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className={styles.title}>
                Заказать звонок
            </h2>

            <Input
                label="Ваше имя"
                type="text"
                autoComplete="name"
                filled={Boolean(name)}
                required
                {...register("name")}
            />

            <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                    <PhoneInput
                        label="Телефон"
                        name={field.name}
                        value={field.value}
                        onAccept={field.onChange}
                        autoComplete="tel"
                        required
                    />
                )}
            />

            <Input
                label="E-mail"
                type="email"
                autoComplete="email"
                filled={Boolean(email)}
                required
                {...register("email")}
            />

            <p className={styles.policy}>
                Нажимая на кнопку «Отправить», вы
                ознакомлены и соглашаетесь с{" "}
                <span
                    className={styles.policyLink}
                    tabIndex={0}
                >
                    политикой обработки персональных данных

                    <span
                        className={styles.policyTooltip}
                        role="tooltip"
                    >
                        Ссылка на политику
                        обработки персональных данных
                    </span>
                </span>
            </p>

            <Button
                type="submit"
                variant="primary"
                className={styles.submit}
                disabled={isSubmitting}
            >
                Отправить
            </Button>
        </form>
    );
}