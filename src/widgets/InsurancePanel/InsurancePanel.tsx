"use client";
import React, { useRef } from "react";
import Tabs from "@src/components/Tabs/Tabs";
import { insuranceTabs } from "@src/widgets/InsurancePanel/config";
import Container from "@src/components/Container/Container";

const InsurancePanel = () => {
  const ref = useRef();
  return (
    <Container>
      <Tabs withTitle tabsData={insuranceTabs} />
    </Container>
  );
};
export default InsurancePanel;
