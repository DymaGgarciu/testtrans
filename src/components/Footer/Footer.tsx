import React from "react";
import Contacts from "@src/components/Footer/ui/Contacts/Contacts";
import Container from "@src/components/Container/Container";
import Title from "@src/components/Title/Title";
import { contactsTabs } from "@src/components/Footer/ui/Location/config";
import Tabs from "@src/components/Tabs/Tabs";
import { inspect } from "util";
import styles from "./Footer.module.scss";
import Copyright from "@src/components/Footer/ui/Copyright/Copyright";

const Footer = () => {
  return (
    <div id="contact">
      <Container>
        <Title classNames={styles.top} text="Контакты" />
        <div className={styles.Footer}>
          <Contacts />
          <Tabs tabsData={contactsTabs} />
        </div>
      </Container>
      <Copyright />
    </div>
  );
};
export default Footer;
