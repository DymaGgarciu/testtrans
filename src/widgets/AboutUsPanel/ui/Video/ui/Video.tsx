"use client";
import React, { useRef, useState } from "react";
import videoPoster from "@public/assets/images/Mask.png";
import Play from "@public/assets/icons/Play.svg";
import styles from "./Video.module.scss";
import Image from "next/image";
import Title from "@src/components/Title/Title";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);

  function play() {
    if (videoRef.current) {
      videoRef.current.play();
      setPlayVideo(true);
    }
  }

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.player}
        poster={videoPoster.src}
        src="/balls.mp4"
        controls={playVideo}
        // style={{ width: "570px", height: "320px" }}
        disablePictureInPicture
        controlsList="nodownload"
      />
      {!playVideo && (
        <button className={styles.playBtn} onClick={play} type="button">
          <Image src={Play} alt="Play btn" />
        </button>
      )}
    </div>
  );
};
export default Video;
