import React from "react";
import Tabs from "@src/components/Tabs/Tabs";
import { aboutUsTabs } from "@src/widgets/AboutUsPanel/ui/config";
import Title from "@src/components/Title/Title";
import styles from "./AboutUsPanel.module.scss";
import Container from "@src/components/Container/Container";

const AboutUsPanel = () => {
  return (
    <div id="about-us">
      <Container classNames={styles.wrapper}>
        <Title text="О нас" classNames={styles.wrap} />
        <Tabs tabsData={aboutUsTabs} />
      </Container>
    </div>
  );
};
export default AboutUsPanel;
