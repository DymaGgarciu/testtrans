import React from "react";
import { InsuranceOption } from "@src/components/Form/config";
import styles from "./RadioForm.module.scss";
import Paragraph from "@src/components/Paragraph/Paragraph";
import Title from "@src/components/Title/Title";

interface RadioForm {
  data: InsuranceOption[];
}
const RadioForm = (props: RadioForm) => {
  const { data } = props;

  return (
    <div className={styles.RadioForm}>
      {data.map((check, i) => (
        <div key={i} className={styles.radioBox}>
          <input
            type="radio"
            id={check.id}
            name={check.name}
            value={check.value}
          />
          <label htmlFor={check.id}>{check.value}</label>
        </div>
      ))}
    </div>
  );
};
export default RadioForm;
