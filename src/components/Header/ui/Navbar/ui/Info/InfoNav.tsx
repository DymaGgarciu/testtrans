import React from "react";
import Phone from "@src/components/Header/ui/Phone/Phone";
import Languages from "@src/components/Header/ui/Languages/Languages";
import styles from "./InfoNav.module.scss";

const InfoNav = () => {
  return (
    <div className={styles.InfoNav}>
      <Phone />
      <Languages />
    </div>
  );
};
export default InfoNav;
