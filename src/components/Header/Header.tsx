"use client";
import React from "react";
import Navbar from "@src/components/Header/ui/Navbar/Navbar";
import Container from "@src/components/Container/Container";
import styles from "./Header.module.scss";
import SecondNav from "@src/components/Header/ui/Navbar/ui/SecondNav/SecondNav";
import useWindowResize from "@src/components/Header/helper/utils";
import Burger from "@src/components/Header/ui/Burger/Burger";

function Header() {
  const isTablet = useWindowResize();
  return (
    <header>
      <div className={styles.Header}>
        <Container classNames={styles.wrapper}>
          {!isTablet && <Navbar />}
          {isTablet && <Burger />}
        </Container>
      </div>
      <Container>{!isTablet && <SecondNav />}</Container>
    </header>
  );
}

export default Header;
