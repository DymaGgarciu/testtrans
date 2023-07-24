import React from "react";
import styles from "../News.module.scss";
import Title from "@src/components/Title/Title";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Image from "@node_modules/next/image";
import ArrowRight from "@public/assets/icons/chevronRight.svg";
import Link from "next/link";

const ShortNewsHeader = () => {
  return (
    <div className={styles.info}>
      <Title type="blue" text="Новости" />
      <Link href="/news" className={styles.link}>
        <Paragraph text="Все новости" />
        <Image className={styles.svg} src={ArrowRight} alt="card-image" />
      </Link>
    </div>
  );
};
export default ShortNewsHeader;
