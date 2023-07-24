"use client";
import React from "react";
import { fakeNews } from "@src/app/news/lib/config";
import NewsHeader from "@src/widgets/News/ui/NewsHeader";
import Title from "@src/components/Title/Title";
import Paragraph from "@src/components/Paragraph/Paragraph";
import { format } from "date-fns";
import Image from "@node_modules/next/image";
import Container from "@src/components/Container/Container";
import styles from "./page.module.scss";
import BackLink from "@src/components/BackLink/BackLink";
import useWindowResize from "@src/components/Header/helper/utils";

interface PageProps {
  params: {
    newsId: string;
  };
}

const Page = (props: PageProps) => {
  const {
    params: { newsId },
  } = props;
  const currentNews = fakeNews?.find((news) => news.id === +newsId);

  const isTablet = useWindowResize();

  return (
    <div>
      <Container>
        {isTablet && (
          <BackLink pageName={currentNews?.title} redirectTo="/news" />
        )}

        <NewsHeader classnames={styles.route} one title={currentNews?.title} />
        <Title classNames={styles.title} text={currentNews?.title} />
        {/*<Paragraph*/}
        {/*  text={format(new Date(currentNews?.publishedAt || ""), "dd MM yyyy")}*/}
        {/*/>*/}
        <div className={styles.img}>
          <Image src={currentNews?.img || ""} alt="newsImage" />
        </div>

        <Paragraph classNames={styles.content} text={currentNews?.content} />
      </Container>
    </div>
  );
};
export default Page;
