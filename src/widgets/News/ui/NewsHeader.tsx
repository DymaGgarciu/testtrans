import React from "react";
import Link from "next/link";
import styles from "@src/widgets/News/News.module.scss";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Image from "@node_modules/next/image";
import Arrow from "@public/assets/icons/arrow.svg";
import clsx from "@node_modules/clsx";

interface AllNewsHeaderProps {
  one?: boolean;
  title?: string;
  classnames?: string;
  form?: boolean;
}
const NewsHeader = (props: AllNewsHeaderProps) => {
  const { one, title, classnames, form } = props;
  return (
    <div className={clsx(styles.allNewsHeader, classnames)}>
      <Link href="/" className={clsx(styles.btnAllNews, styles.orange)}>
        <Paragraph text="Главная" />
        <Image src={Arrow} alt="card-image" />
      </Link>
      <Link
        href="/news"
        className={clsx(styles.btnAllNews, `${one && styles.orange}`)}
      >
        <Paragraph text={`${form ? "Страховой случай" : "Новости"}`} />
        {one && <Image src={Arrow} alt="card-image" />}
      </Link>
      {title && <Paragraph classNames={clsx(styles.btnAllNews)} text={title} />}
    </div>
  );
};
export default NewsHeader;
