"use client";

import { useState } from "react";
import Container from "../Container/Container";
import AboutImage from "./AboutImage/AboutImage";
import AboutContent from "./AboutContent/AboutContent";
import VideoPreview from "./VideoPreview/VideoPreview";
import VideoModal from "../VideoModal/VideoModal";
import styles from "./About.module.scss";

export default function About() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className={styles.about}>
                <Container>
                    <div className={styles.inner}>
                        <AboutImage />

                        <div className={styles.right}>
                            <AboutContent />

                            <VideoPreview
                                onClick={() => setIsVideoOpen(true)}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
            />
        </>
    );
}