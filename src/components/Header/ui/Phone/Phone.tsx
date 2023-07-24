"use client";
import React, { useState } from "react";
import Image from "next/image";
import phone from "@public/assets/icons/phone.svg";
import ddIcon from "@public/assets/icons/arrowDropDown.svg";
import styles from "./Phone.module.scss";
import Button from "@src/components/Button/Button";
import Modal from "@src/components/Header/ui/Modal/Modal";

function Phone() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.Phone}>
      <Button
        type="head"
        onClick={() => {
          setModalOpen(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <Image src={phone} alt="phone-icon" /> +373 69 00 00 00
        <Image src={ddIcon} alt="dd-icon" />
      </Button>
      {modalOpen && <Modal onClick={setModalOpen} />}
    </div>
  );
}

export default Phone;
