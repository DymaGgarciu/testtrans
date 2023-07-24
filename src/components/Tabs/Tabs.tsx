"use client";
import { Tabs } from "@src/widgets/AboutUsPanel/ui/config";
import React, { useState } from "react";
import Tab from "./Tab";
import clsx from "@node_modules/clsx";
import styles from "./Tabs.module.scss";
import Title from "@src/components/Title/Title";

interface TabProps {
  tabsData: Tabs;
  defaultTab?: number;
  tabStyles?: any;
  withTitle?: boolean;
  scrollId?: string;
  noDivider?: boolean;
}

const Tabs = (props: TabProps) => {
  const {
    tabsData,
    defaultTab,
    tabStyles,
    withTitle,
    scrollId,
    noDivider = true,
  } = props;
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabBoxClassNames = clsx({
    [styles.TabsBox]: !tabStyles,
    [tabStyles?.TabsBox]: tabStyles,
  });

  const tabsClassNames = clsx({
    [styles.Tabs]: !tabStyles,
    [tabStyles?.Tabs]: tabStyles,
  });

  const tabPanelClassNames = clsx({
    [styles.tabPanel]: !tabStyles,
    [tabStyles?.tabPanel]: tabStyles,
  });

  const onTabSelect = (value: number) => {
    setActiveTab(value);
  };

  return (
    <div className={tabBoxClassNames}>
      {withTitle && (
        <Title
          classNames={styles.top}
          text={tabsData.tabs[activeTab as keyof object]?.name}
        />
      )}

      <div id={scrollId} className={tabsClassNames}>
        {tabsData.tabs.map((tab, i) => (
          <Tab
            tabStyles={tabStyles}
            key={tab.id}
            value={tab.name}
            onTabSelect={() => onTabSelect(i)}
            checked={activeTab === i}
          />
        ))}
      </div>
      {noDivider && <div className={styles.divider} />}
      <div className={tabPanelClassNames}>
        {tabsData.tabPanel[activeTab]?.content}
      </div>
    </div>
  );
};
export default Tabs;
