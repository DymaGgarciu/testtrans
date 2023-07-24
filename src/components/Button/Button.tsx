"use client";
import React from "react";
import styles from "./Button.module.scss";
import clsx from "@node_modules/clsx";
interface ButtonProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  type?: string;
  active?: boolean;
}

function Button(props: ButtonProps) {
  const { children, classNames, onClick, type = "default", active } = props;

  const titleStyle = clsx({
    [styles.head]: type === "head",
    [styles.collapse]: type === "collapse",
    [styles.Button]: type === "default",
    [styles.activeBtn]: active,
  });

  return (
    <button onClick={onClick} className={clsx(titleStyle, classNames)}>
      {children}
    </button>
  );
}

export default Button;
