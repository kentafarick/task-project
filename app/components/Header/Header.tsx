"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import CallbackButton from "../CallbackButton/CallbackButton"
import Phone from "../Phone/Phone";
import ApartmentSelect from "../ApartmentSelect/ApartmentSelect";
import CallbackModal from "../CallbackModal/CallbackModal";

export default function Header() {
    const [isCallbackOpen, setIsCallbackOpen] = useState(false);

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

                            <CallbackButton 
                                onClick={() => setIsCallbackOpen(true)}
                            />
                        </div>

                    </div>
                </Container>
            </header>

            <CallbackModal
                isOpen={isCallbackOpen}
                onClose={() => setIsCallbackOpen(false)}
            />
        </>
    );
}