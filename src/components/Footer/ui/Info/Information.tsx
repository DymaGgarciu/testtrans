import React from "react";
import Paragraph from "@src/components/Paragraph/Paragraph";
import { addressData } from "@src/components/Footer/ui/Info/Config";
import Image from "@node_modules/next/image";
import styles from "./Information.module.scss";

interface InformationProps {
  city: "Chisinau" | "Balti" | "Edinet";
}
const Information = (props: InformationProps) => {
  const { city } = props;
  return (
    <div className={styles.Information}>
      <div className={styles.infoContent}>
        {addressData[city].data.map((address, i) => (
          <div key={address.name + i} className={styles.content}>
            <Paragraph classNames={styles.info} text={address.name} />
            <Paragraph classNames={styles.name} text={address.info} />
          </div>
        ))}
      </div>
      <div className={styles.infoImg}>
        <Image src={addressData[city].img} alt="map" />
      </div>
    </div>
  );
};
export default Information;
