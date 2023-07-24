import React from "react";
import Container from "@src/components/Container/Container";
import Offers from "@src/components/Offers/Offers";
import Qa from "@src/components/QA/QA";
import Button from "@src/components/Button/Button";
import styles from "./InsuranceInfo.module.scss";
import { insuranceData } from "@src/widgets/InsurancePanel/ui/config";
import InsuranceCard from "@src/components/Card/InsuranceCard";

interface InsurancePanelProps {
  tab: string;
}

const InsuranceInfo = (props: InsurancePanelProps) => {
  const { tab = "property" } = props;

  return (
    <div>
      <Container>
        <div>
          <InsuranceCard
            {...insuranceData[tab as keyof typeof insuranceData].card}
          />
          <Offers
            offersData={insuranceData[tab as keyof typeof insuranceData].offers}
          />
        </div>
        <Qa qaData={insuranceData[tab as keyof typeof insuranceData].qa} />
      </Container>
      <div className={styles.more}>
        <Button classNames={styles.btn}>
          Узнать больше о &nbsp;
          {insuranceData[tab as keyof typeof insuranceData].card.title}
        </Button>
      </div>
    </div>
  );
};
export default InsuranceInfo;
