import React from "react";
import styles from "./Paragraph.module.scss";
import clsx from "@node_modules/clsx";
import Image from "@node_modules/next/image";
import Arrow from "../../../public/assets/icons/check.svg";

interface ParagraphProps {
  classNames?: string;
  text?: string;
  type?: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { text, classNames, type = "Content_text" } = props;

  const titleStyle = clsx({
    [styles.Content_text]: type === "Content_text",
    [styles.Card_text]: type === "Card_text",
    [styles.modalt]: type === "modal",
  });

  return (
    <>
      <p className={clsx(titleStyle, classNames)}>{text || ""}</p>
    </>
  );
};
export default Paragraph;
