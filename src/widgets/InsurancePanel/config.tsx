import InsuranceInfo from "@src/widgets/InsurancePanel/ui/InsuranceInfo";

export type Tab = {
  id: string;
  name: string;
  label: string;
};
export type TabPanel = {
  name: string;
  content: React.ReactNode;
  label?: string;
};

export type Tabs = {
  tabs: Tab[];
  tabPanel: TabPanel[];
};

export const insuranceTabs: Tabs = {
  tabs: [
    { id: "1", name: "Имущество", label: "property" },
    { id: "2", name: "Жизнь и здоровье", label: "life" },
    { id: "3", name: "Автомобиль", label: "car" },
    { id: "4", name: "Путешествия", label: "travel" },
    { id: "5", name: "Финансы", label: "finance" },
  ],
  tabPanel: [
    {
      name: "Миссия",
      content: <InsuranceInfo tab="property" />,
      label: "property",
    },
    {
      name: "Наши преимущества",
      content: <InsuranceInfo tab="life" />,
      label: "life",
    },
    { name: "Партнеры", content: <InsuranceInfo tab="car" />, label: "car" },
    {
      name: "Финансовые показатели",
      content: <InsuranceInfo tab="travel" />,
      label: "travel",
    },
    {
      name: "Видео",
      content: <InsuranceInfo tab="finance" />,
      label: "finance",
    },
  ],
};
