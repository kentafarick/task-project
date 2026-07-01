"use client";

import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import CallbackButton from "../CallbackButton/CallbackButton"
import Phone from "../Phone/Phone";
import ApartmentSelect from "../ApartmentSelect/ApartmentSelect";

export default function Header() {
    return (

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
                        <CallbackButton />
                    </div>

                </div>
            </Container>
        </header>
    );
}