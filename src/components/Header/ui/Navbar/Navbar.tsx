"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "@node_modules/next/image";
import logo from "@public/assets/images/Logo.svg";
import Button from "@src/components/Button/Button";
import Phone from "@src/components/Header/ui/Phone/Phone";
import Languages from "@src/components/Header/ui/Languages/Languages";
import HeadNav from "@src/components/Header/ui/HeadNav/HeadNav";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.options}>
        <Link className={styles.logo} href="/">
          <Image src={logo} width={200} height={50} alt="Transelit-Logo" />
        </Link>
        <HeadNav />
      </div>
      <div className={styles.info}>
        <Phone />
        <Languages />
      </div>
    </div>
  );
};

export default Navbar;
