import React from "react";
import Link from "@node_modules/next/link";
import styles from "./BackLink.module.scss";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Image from "@node_modules/next/image";
import Arrow from "@public/assets/icons/arrow.svg";

interface BackLinkProps {
  redirectTo: string;
  pageName?: string;
}

const BackLink = (props: BackLinkProps) => {
  const { redirectTo, pageName } = props;

  return (
    <Link href={redirectTo} className={styles.BackLink}>
      <Image src={Arrow} alt="card-image" />
      <Paragraph text={pageName} />
    </Link>
  );
};
export default BackLink;
