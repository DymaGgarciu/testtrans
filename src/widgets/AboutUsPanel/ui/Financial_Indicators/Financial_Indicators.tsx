import React from "react";
import Tabs from "@src/components/Tabs/Tabs";
import { pdfTabs } from "@src/widgets/AboutUsPanel/ui/Pdf/config";
import cls from "./Financial_Indicators.module.scss";
import Title from "@src/components/Title/Title";
import styles from "@src/widgets/AboutUsPanel/ui/Mission/Mission.module.scss";
// import styles from "./Tabs.module.scss";

const FinancialIndicators = () => {
  return (
    <>
      <Title
        classNames={styles.Title}
        type="black"
        text="Финансовые показатели"
      />
      <Tabs tabStyles={cls} tabsData={pdfTabs} />
    </>
  );
};
export default FinancialIndicators;
