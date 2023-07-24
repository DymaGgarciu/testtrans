import React from "react";
import { advantagesData } from "@src/widgets/AboutUsPanel/ui/Advantages/config";
import Advantage from "@src/widgets/AboutUsPanel/ui/Advantages/ui/Advantage";
import Title from "@src/components/Title/Title";
import styles from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <>
      <Title classNames={styles.Title} type="black" text="Наши преимущества" />
      <div className={styles.Advantages}>
        {advantagesData.map((advantage, i) => (
          <Advantage
            key={i}
            img={advantage.img}
            title={advantage.title}
            content={advantage.content}
          />
        ))}
      </div>
    </>
  );
};
export default Advantages;
