"use client";
import React from "react";
import styles from "./Modal.module.scss";
import ClickAwayListener from "react-click-away-listener";
import Title from "@src/components/Title/Title";
import ModalForm from "@src/components/Header/ui/Modal/ModalForm";

interface ModalProps {
  onClick: (b: boolean) => void;
}

function Modal(props: ModalProps) {
  const { onClick } = props;

  const handleClickAway = () => {
    onClick(false);
    document.body.style.overflow = "";
  };

  return (
    <div className={styles.modalBackground}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={styles.modalContainer}>
          <Title
            type="typography"
            classNames={styles.titleModal}
            text="Заказать звонок"
          />
          <ModalForm onChange={handleClickAway} />
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default Modal;
