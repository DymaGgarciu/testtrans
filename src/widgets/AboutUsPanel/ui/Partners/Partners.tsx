import React from "react";
import Title from "@src/components/Title/Title";
import { partnersData } from "@src/widgets/AboutUsPanel/ui/Partners/config";
import Image from "next/image";
import styles from "./Partners.module.scss";

const Partners = () => {
  return (
    <>
      <Title classNames={styles.Title} type="black" text="Партнеры" />
      <div className={styles.border}>
        <div className={styles.Partners}>
          {partnersData.map((partner, i) => (
            <Image key={i} src={partner.img} alt={partner.alt} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Partners;
