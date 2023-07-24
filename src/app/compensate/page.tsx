import React from "react";
import backInsurance from "../../../public/assets/images/backinsurance.png";
import Swipes from "@src/widgets/Slider/ui/Swipes/Swipes";
import Container from "@src/components/Container/Container";
import styles from "./lib/Compensate.module.scss";
import Tabs from "@src/components/Tabs/Tabs";
import { compensateTabs } from "@src/app/compensate/lib/config";

const Compensate = () => {
  return (
    <div>
      <div className={styles.blockPosition}>
        <Swipes
          img={backInsurance}
          first_title="Страховое"
          second_title="возмещение"
          text_first="Подай заявление на выплату возмещения"
          text_second="быстро и без проблем"
          btn="Подать заявление"
          btn2="Узнать больше"
          compensate
        />
      </div>

      <div className={styles.content}>
        <Container>
          <Tabs scrollId="compesates" withTitle tabsData={compensateTabs} />
        </Container>
      </div>
    </div>
  );
};
export default Compensate;
