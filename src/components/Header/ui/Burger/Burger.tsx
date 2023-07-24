"use client";
import React, { useState } from "react";
import burgerIcon from "../../../../../public/assets/icons/menu.svg";
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";
import styles from "@src/components/Header/ui/Navbar/ui/SecondNav/SecondNav.module.scss";
import burgerStyles from "./Burger.module.scss";
import local_fire from "@public/assets/icons/secondNavIcon/local_fire.svg";
import logo from "@public/assets/images/Logo.svg";
import BurgerNavs from "@src/components/Header/ui/Burger/ui/BurgerNavs";
import SecondNav from "@src/components/Header/ui/Navbar/ui/SecondNav/SecondNav";
import InfoNav from "@src/components/Header/ui/Navbar/ui/Info/InfoNav";
import Button from "@src/components/Button/Button";

const Burger = () => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const handleBurgerOpen = (burgerOpen: boolean) => {
    document.body.style.overflow = `${!burgerOpen ? "hidden" : ""}`;
    setBurgerOpen(!burgerOpen);
  };

  const handleRouteChange = () => {
    document.body.style.overflow = "";
    setBurgerOpen(false);
  };

  return (
    <div className={burgerStyles.BurgerHead}>
      <div className={burgerStyles.Burger}>
        <Link
          onClick={handleRouteChange}
          className={burgerStyles.logo}
          href="/"
        >
          <Image src={logo} width={128} height={50} alt="Transelit-Logo" />
        </Link>

        <div className={burgerStyles.menu}>
          <Link
            onClick={handleRouteChange}
            className={styles.toForm}
            href="/reimbursement"
          >
            <Image src={local_fire} alt="local_fire" />
            Страховой случай
          </Link>
          <Button
            onClick={() => {
              handleBurgerOpen(burgerOpen);
            }}
            classNames={burgerStyles.btn}
          >
            <Image src={burgerIcon} alt="burgerIcon" />
          </Button>
        </div>
      </div>

      <div
        className={burgerStyles.fullPageMenu}
        style={{ display: `${burgerOpen ? "block" : "none"}` }}
      >
        <div className={burgerStyles.firstHead}>
          <BurgerNavs />
        </div>
        <SecondNav handleRouteChange={handleRouteChange} />
        <div className={burgerStyles.lastHead}>
          <InfoNav />
        </div>
      </div>
    </div>
  );
};
export default Burger;
