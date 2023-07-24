import React from "react";
import clsx from "@node_modules/clsx";
import styles from "@src/components/Tabs/Tabs.module.scss";
interface TabProps {
  value: string;
  onTabSelect: () => void;
  checked: boolean;
  tabStyles: any;
}

const Tab = (props: TabProps) => {
  const { value, onTabSelect, checked, tabStyles } = props;
  const tabActivestyle = clsx({
    [styles?.active]: !tabStyles,
    [tabStyles?.active]: tabStyles,
  });
  const tabInactiveStyles = clsx({
    [styles?.tabHeader]: !tabStyles,
    [tabStyles?.tabHeader]: tabStyles,
  });

  return (
    <div
      onClick={onTabSelect}
      className={clsx(checked ? tabActivestyle : tabInactiveStyles)}
    >
      {value}
    </div>
  );
};
export default Tab;
