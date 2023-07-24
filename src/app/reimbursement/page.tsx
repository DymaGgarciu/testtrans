"use client";
import React from "react";
import Form from "@src/components/Form/Form";
import Container from "@src/components/Container/Container";
import NewsHeader from "@src/widgets/News/ui/NewsHeader";
import styles from "./pages.module.scss";
import useWindowResize from "@src/components/Header/helper/utils";
import BackLink from "@src/components/BackLink/BackLink";

const Page = () => {
  const isTablet = useWindowResize();
  return (
    <Container>
      {isTablet && <BackLink redirectTo="/" pageName="Страховой случай" />}
      <NewsHeader classnames={styles.top} form />
      <Form />
    </Container>
  );
};
export default Page;
