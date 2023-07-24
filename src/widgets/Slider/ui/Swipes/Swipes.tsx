"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "@src/components/Container/Container";
import styles from "./Swipes.module.scss";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Button from "@src/components/Button/Button";
import Link from "next/link";
import useWindowResize from "@src/components/Header/helper/utils";

interface SwipesProps {
  img: StaticImageData;
  first_title: string;
  second_title: string;
  text_first: string;
  text_second: string;
  btn: string;
  btn2?: string;
  compensate?: boolean;
}

const Swipes = (props: SwipesProps) => {
  const {
    img,
    first_title,
    second_title,
    text_first,
    text_second,
    btn,
    btn2,
    compensate,
  } = props;

  const isTablet = useWindowResize();
  return (
    <>
      <div className={styles.swipes_container}>
        <Image src={img} alt="Background-Image" />
      </div>
      <Container classNames={styles.content}>
        <div>
          <h1 className={styles.title}>
            {first_title} <br /> {second_title}
          </h1>
          {!compensate && (
            <>
              <Paragraph text={text_first} classNames={styles.white} />
              <Paragraph text={text_second} classNames={styles.blue} />
              <Button classNames={styles.btn}>{btn}</Button>
            </>
          )}
          {compensate && (
            <>
              <Paragraph text={text_first} />
              <Paragraph text={text_second} classNames={styles.blue} />
              <div className={styles.compensateBtnSection}>
                {!isTablet && (
                  <Link href="/reimbursement">
                    <Button classNames={styles.compensateBtn}>{btn}</Button>
                  </Link>
                )}

                <Link href="#compesates">
                  <Button
                    classNames={
                      isTablet ? styles.btn : styles.compensateBtnWhite
                    }
                  >
                    {btn2}
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Swipes;
