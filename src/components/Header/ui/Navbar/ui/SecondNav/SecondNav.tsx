"use client";
import React, { useState } from "react";
import Link from "@node_modules/next/link";
import Button from "@src/components/Button/Button";
import styles from "./SecondNav.module.scss";
import about from "../../../../../../../public/assets/icons/secondNavIcon/about.svg";
import insurance from "../../../../../../../public/assets/icons/secondNavIcon/insurance.svg";
import local_fire from "../../../../../../../public/assets/icons/secondNavIcon/local_fire.svg";
import phone from "../../../../../../../public/assets/icons/secondNavIcon/phone.svg";
import reimbursement from "../../../../../../../public/assets/icons/secondNavIcon/reimbursement.svg";
import Image from "@node_modules/next/image";
import useWindowResize from "@src/components/Header/helper/utils";

interface SecondNavProps {
  handleRouteChange?: () => void;
}

const SecondNav = (props: SecondNavProps) => {
  const { handleRouteChange } = props;
  const [activeButton, setActiveButton] = useState("Insurance");
  const isTablet = useWindowResize();

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  return (
    <div className={styles.SecondNav}>
      <div className={styles.options}>
        <div className={styles.secondNavs}>
          <Link onClick={handleRouteChange} href="/">
            <Button
              active={activeButton === "Insurance"}
              onClick={() => handleButtonClick("Insurance")}
              type="head"
            >
              <Image src={insurance} alt="insurance" />
              Страхование
            </Button>
          </Link>
          <Link onClick={handleRouteChange} href="/compensate">
            <Button
              active={activeButton === "Refunds"}
              onClick={() => handleButtonClick("Refunds")}
              type="head"
            >
              <Image src={reimbursement} alt="reimbursement" />
              Возмещения
            </Button>
          </Link>
          <Link onClick={handleRouteChange} href="#about-us" scroll>
            <Button type="head">
              <Image src={about} alt="about" />О нас
            </Button>
          </Link>
          <Link onClick={handleRouteChange} href="#contact">
            <Button type="head">
              <Image src={phone} alt="phone" />
              Контакты
            </Button>
          </Link>
        </div>
        {!isTablet && (
          <Link className={styles.toForm} href="/reimbursement">
            <Image src={local_fire} alt="local_fire" />
            Страховой случай
          </Link>
        )}
      </div>
    </div>
  );
};
export default SecondNav;
