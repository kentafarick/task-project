"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Burger from "../../Burger/Burger";
import Logo from "../../Logo/Logo";
import FeedbackButton from "../../feedback/FeedbackButton/FeedbackButton"
import Phone from "../../Phone/Phone";
import ApartmentSelect from "../../ApartmentSelect/ApartmentSelect";
import FeedbackModal from "../../feedback/FeedbackModal/FeedbackModal";

export default function Header() {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.wrapper}>

                        <div className={styles.left}>

                            <Burger />
                            <ApartmentSelect />

                        </div> 

                        <div className={styles.center}>
                            <Logo />
                        </div>

                        <div className={styles.right}>
                            <Phone />

                            <FeedbackButton 
                                onClick={() => setIsFeedbackOpen(true)}
                            />
                        </div>

                    </div>
                </Container>
            </header>

            <FeedbackModal
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
            />
        </>
    );
}