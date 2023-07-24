import React from "react";
import Title from "@src/components/Title/Title";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Button from "@src/components/Button/Button";
import Image, { StaticImageData } from "@node_modules/next/image";
import styles from "./InsuranceCard.module.scss";
import useWindowResize from "@src/components/Header/helper/utils";

interface InsuranceCardProps {
  title: string;
  info: string;
  img: StaticImageData;
}
const InsuranceCard = (props: InsuranceCardProps) => {
  const { title, info, img } = props;
  const isTablet = useWindowResize();
  return (
    <div className={styles.InsuranceCard}>
      <div className={styles.info}>
        {!isTablet && <Title type="black" text={title} />}
        <Paragraph classNames={styles.text} text={info} />
        <Button classNames={styles.btn}>Получить консультацию</Button>
      </div>
      <Image src={img} alt="InsuranceCard" />
      {isTablet && (
        <Title classNames={styles.topTitle} type="black" text={title} />
      )}
    </div>
  );
};
export default InsuranceCard;
