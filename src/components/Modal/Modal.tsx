import React from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  header?: string;
  actionButtonTitle: string;
  children: React.ReactNode;
  onClose: () => void;
  onAction: () => void;
}

function Modal({
  isOpen,
  actionButtonTitle,
  onClose,
  onAction,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div>{children}</div>
        <div className={styles.modal__footer}>
          <button onClick={onClose}>Cancel</button>
          <button className={styles.primary} onClick={onAction}>
            {actionButtonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
