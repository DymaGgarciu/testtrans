import React from "react";
import Title from "@src/components/Title/Title";
import styles from "@src/widgets/AboutUsPanel/ui/Advantages/ui/Advantage.module.scss";
import Image from "@node_modules/next/image";
import Paragraph from "@src/components/Paragraph/Paragraph";
import { StaticImageData } from "next/image";

interface TitleProps {
  img: StaticImageData;
  title: string;
  content: string;
}

const Advantage = (props: TitleProps) => {
  const { img, title, content } = props;

  return (
    <div className={styles.Card}>
      <Image className={styles.img} src={img} alt={title} />
      <Title type="Card_Type" text={title} />
      <Paragraph type="Card_text" text={content} />
    </div>
  );
};
export default Advantage;
