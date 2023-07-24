import React from "react";
import styles from "./Title.module.scss";
import clsx from "@node_modules/clsx";

interface TitleProps {
  text?: string;
  type?: string;
  classNames?: string;
}

const Title = (props: TitleProps) => {
  const { text, type = "blue", classNames } = props;

  const titleStyle = clsx({
    [styles.Blue]: type === "blue",
    [styles.Black]: type === "black",
    [styles.Card_Type]: type === "Card_Type",
    [styles.typography]: type === "typography",
  });

  return (
    <h3 className={clsx(styles.Title, titleStyle, classNames)}>{text || ""}</h3>
  );
};
export default Title;
