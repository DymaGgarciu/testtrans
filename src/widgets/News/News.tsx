"use client";
import React, { useState } from "react";
import Card from "@src/components/Card/Card";
import { fakeNews } from "@src/app/news/lib/config";
import styles from "./News.module.scss";
import Container from "@src/components/Container/Container";
import { isToday, format } from "date-fns";
import ShortNewsHeader from "@src/widgets/News/ui/ShortNewsHeader";
import AllNewsHeader from "@src/widgets/News/ui/NewsHeader";
import Link from "next/link";
import clsx from "@node_modules/clsx";
import BackLink from "@src/components/BackLink/BackLink";
import useWindowResize from "@src/components/Header/helper/utils";

interface NewsProps {
  all?: boolean;
}
const News = (props: NewsProps) => {
  const { all } = props;
  const isTablet = useWindowResize();
  const [visibleNews, setVisibleNews] = useState(
    all ? fakeNews : fakeNews.slice(0, 3)
  );

  const newsClassName = clsx({
    [styles.News]: all,
    [styles.NewsShort]: !all,
  });

  return (
    <Container classNames={styles.wrapper}>
      {all ? <AllNewsHeader /> : <ShortNewsHeader />}
      {isTablet && all && <BackLink redirectTo="/" pageName="Новости" />}

      <div className={clsx(newsClassName)}>
        {visibleNews.map((news, i) => (
          <Link
            className={styles.navigate}
            key={news.id}
            href={`/news/${news.id}`}
          >
            <Card
              day={
                isToday(new Date(news.publishedAt))
                  ? "сегодня"
                  : format(new Date(news.publishedAt), "dd MM yyyy")
              }
              title={news.title}
              img={news.img}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};
export default News;
