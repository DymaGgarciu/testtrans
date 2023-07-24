import React from "react";
import Paragraph from "@src/components/Paragraph/Paragraph";
import styles from "./Copyright.module.scss";

const Copyright = () => {
  return (
    <div className={styles.Copyright}>
      <Paragraph
        classNames={styles.title}
        text="© 2023 Transelit. All rights reserved"
      />
    </div>
  );
};
export default Copyright;
