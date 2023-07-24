"use client";
import { useDropzone } from "@node_modules/react-dropzone";
import { useCallback } from "react";
import styles from "./Dropzone.module.scss";
import clsx from "@node_modules/clsx";

const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropzoneClassName = clsx(styles.MyDropzone, {
    [styles["dropzone-active"]]: isDragActive,
  });

  return (
    <section className="container">
      <div
        {...getRootProps()}
        className={clsx(styles.MyDropzone, dropzoneClassName)}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>
            Перетащите файлы сюда или <br /> нажмите, чтобы выбрать
          </p>
        )}
      </div>
    </section>
  );
};

export default MyDropzone;
