import React from "react";
import styles from "./Card.module.scss";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Image, { StaticImageData } from "@node_modules/next/image";
import ArrowRight from "@/public/assets/icons/chevronRight.svg";
import Button from "@src/components/Button/Button";

interface CardProps {
  day: string;
  title: string;
  img: StaticImageData;
}
const Card = (props: CardProps) => {
  const { day, title, img } = props;

  return (
    <div className={styles.Card}>
      <div className={styles.info}>
        <Paragraph classNames={styles.day} text={day} />
        <Paragraph classNames={styles.title} text={title} />
        <Image width={320} height={195} src={img} alt="card-image" />
        <div className={styles.showMe}>
          Подробнее <Image src={ArrowRight} alt="card-image" />
        </div>
      </div>
    </div>
  );
};
export default Card;
