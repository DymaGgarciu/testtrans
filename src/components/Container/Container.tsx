import React from "react";
import styles from "./Container.module.scss";
import clsx from "clsx";

interface Container {
  children: React.ReactNode;
  classNames?: string;
}
const Container = ({ children, classNames }: Container) => {
  return <div className={clsx(styles.Container, classNames)}>{children}</div>;
};

export default Container;
