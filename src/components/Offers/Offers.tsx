import React from "react";
import Title from "@src/components/Title/Title";
import Paragraph from "@src/components/Paragraph/Paragraph";
import car from "../../../public/assets/images/auto.png";
import Image from "@node_modules/next/image";
import styles from "./Offers.module.scss";
import Arrow from "@public/assets/icons/check.svg";
import Container from "@src/components/Container/Container";

interface OffersProps {
  offersData: string[];
}
const Offers = (props: OffersProps) => {
  const { offersData } = props;
  return (
    <div className={styles.Offers}>
      <Title type="black" text="Мы предлагаем" />
      <div className={styles.content}>
        <div className={styles.text_block}>
          {offersData.map((offer, i) => (
            <div key={i} className={styles.textWithIcon}>
              <Image className={styles.icon} src={Arrow} alt="Arrow" />
              <Paragraph key={i} text={offer} />
            </div>
          ))}
        </div>
        <Image className={styles.img} src={car} alt="car" />
      </div>
    </div>
  );
};
export default Offers;
