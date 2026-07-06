"use client";
import Modal from "../../ui/Modal/Modal";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import styles from "./FeedbackModal.module.scss";

type FeedbackModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function FeedbackModal({
    isOpen,
    onClose,
}: FeedbackModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={styles.popup}
            closeClassName={styles.close}
            closeLabel="Закрыть форму"
        >
            <FeedbackForm />
        </Modal>
    );
}