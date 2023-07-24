import React from "react";
import Video from "@src/widgets/AboutUsPanel/ui/Video/ui/Video";
import Paragraph from "@src/components/Paragraph/Paragraph";
import styles from "./VideoTap.module.scss";
import Title from "@src/components/Title/Title";

const VideoTab = () => {
  return (
    <div>
      <Title classNames={styles.Title} text="Видео" type="black" />
      <div className={styles.Videos}>
        <Video />
        <div className={styles.info}>
          <Paragraph
            classNames={styles.text}
            text="Пара каких-то слов про заголовок видео"
          />
          <Paragraph text="А тут что-то для описания видео, не знаю правда, если оно вообще нужно, может просто сюда поставить два видео. И вообще, есть ли у клиента видео?" />
        </div>
      </div>
    </div>
  );
};
export default VideoTab;
