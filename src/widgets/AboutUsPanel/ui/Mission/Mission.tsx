import React from "react";
import Title from "@src/components/Title/Title";
import Paragraph from "@src/components/Paragraph/Paragraph";
import styles from "./Mission.module.scss";

const Mission = () => {
  return (
    <div>
      <Title classNames={styles.Title} type="black" text="Наша миссия" />
      <Paragraph text="Transelit — современная страховая компания без офисов. Оформить наши договоры можно онлайн или в партнерской сети. Transelit имеет репутацию надежной и устойчивой компании. за более чем 29 лет работы на рынке TranseIit наладила долгосрочные деловые взаимоотношения с крупнейшими банками, автодилерами, туристическими операторами и медицинскими центрами Республики Молдова." />
    </div>
  );
};
export default Mission;
