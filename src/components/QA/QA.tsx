"use client";
import React, { useState } from "react";
import Button from "@src/components/Button/Button";
import Image from "@node_modules/next/image";
import qa from "../../../public/assets/icons/arrow_down.svg";
import styles from "./Qa.module.scss";
import Paragraph from "@src/components/Paragraph/Paragraph";
import { QAItem } from "@src/widgets/InsurancePanel/ui/config";
import Title from "@src/components/Title/Title";
import Container from "@src/components/Container/Container";

interface QaProps {
  qaData: QAItem[];
  notCollapse?: boolean;
}
const Qa = (props: QaProps) => {
  const { qaData, notCollapse } = props;

  const [open, setOpen] = useState(true);

  return (
    <div className={styles.Qa}>
      {!notCollapse && (
        <button className={styles.btnQa} onClick={() => setOpen(!open)}>
          Вопросы и ответы
          <Image
            style={{
              transform: `${open ? "rotate(-180deg)" : "rotate(0deg)"}`,
            }}
            src={qa}
            alt="qa"
          />
        </button>
      )}
      {notCollapse && (
        <Title type="black" text="Как работает страховое возмещение" />
      )}

      {qaData.map((qa, i) => (
        <div
          key={qa.name}
          style={{
            display: `${open ? "block" : "none"}`,
          }}
          className={styles.content}
        >
          <Paragraph classNames={styles.name} text={qa.name} />
          <Paragraph classNames={styles.info} text={qa.info} />
        </div>
      ))}
    </div>
  );
};
export default Qa;
