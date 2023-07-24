import React from "react";
import Title from "@src/components/Title/Title";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Image from "@node_modules/next/image";
import facebook from "@/public/assets/icons/social/facebook.svg";
import instagram from "@/public/assets/icons/social/instagram.svg";
import whatsapp from "@/public/assets/icons/social/whatsapp.svg";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.Contacts}>
      <Paragraph classNames={styles.title} text="Наши соцсети" />
      <Paragraph text="Подписывайся, чтобы узнавать самую свежую информацию о видах страхования и страховых выплатах" />
      <div className={styles.social}>
        <a href="https://www.facebook.com/">
          <Image src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <Image src={instagram} alt="instagram" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=37369000000">
          <Image src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </div>
  );
};
export default Contacts;
