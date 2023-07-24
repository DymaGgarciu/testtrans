import React from "react";
import Qa from "@src/components/QA/QA";
import { compensateData } from "@src/app/compensate/lib/config";
import Button from "@src/components/Button/Button";
import styles from "./Compensate.module.scss";

interface CompensateInfoProps {
  tab: string;
}

const CompensateInfo = (props: CompensateInfoProps) => {
  const { tab = "osago" } = props;
  return (
    <div className={styles.Compensate}>
      <Qa notCollapse qaData={compensateData[tab as keyof object].qa} />
      <Button classNames={styles.btn}>
        Узнать больше о &nbsp;
        {compensateData[tab as keyof object].title}
      </Button>
    </div>
  );
};
export default CompensateInfo;
