import React from "react";
import styles from "./Languages.module.scss";

const Languages = () => {
  // @ts-ignore
  const handleChange = (event) => {
    console.log(event.current.value);
  };
  return (
    <div className={styles.Languages}>
      <input type="radio" id="Lang1" name="Lang" value="Ro" />
      <label htmlFor="Lang1">Ro</label>
      <input type="radio" id="Lang2" name="Lang" value="Ру" />
      <label htmlFor="Lang2">Ру</label>
      <input type="radio" id="Lang3" name="Lang" value="En" />
      <label htmlFor="Lang3">En</label>
    </div>
  );
};

export default Languages;
