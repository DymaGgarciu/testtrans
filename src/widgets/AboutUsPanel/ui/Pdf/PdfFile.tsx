import React from "react";
import PdfIcon from "@public/assets/icons/Pdf.svg";
import Image from "next/image";
import Title from "@src/components/Title/Title";
import Paragraph from "@src/components/Paragraph/Paragraph";
import styles from "./PdfFile.module.scss";
interface PdfFileProps {
  title: string;
  lang: string;
}

const PdfFile = (props: PdfFileProps) => {
  const { title, lang } = props;
  return (
    <div className={styles.Pdf}>
      <Image src={PdfIcon} alt="pdf" />
      <Title classNames={styles.title} type="typography" text={title} />
      <Paragraph classNames={styles.lang} text={lang} />
    </div>
  );
};
export default PdfFile;
