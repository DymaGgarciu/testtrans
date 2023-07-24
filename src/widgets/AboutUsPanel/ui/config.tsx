import Mission from "@src/widgets/AboutUsPanel/ui/Mission/Mission";
import Advantages from "@src/widgets/AboutUsPanel/ui/Advantages/Advantages";
import Partners from "@src/widgets/AboutUsPanel/ui/Partners/Partners";
import VideoTab from "@src/widgets/AboutUsPanel/ui/Video/VideoTab";
import Financial_Indicators from "@src/widgets/AboutUsPanel/ui/Financial_Indicators/Financial_Indicators";

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

export const aboutUsTabs: Tabs = {
  tabs: [
    { id: "1", name: "Миссия", label: "mission" },
    { id: "2", name: "Наши преимущества", label: "advantages" },
    { id: "3", name: "Партнеры", label: "partners" },
    { id: "4", name: "Финансовые показатели", label: "mission" },
    { id: "5", name: "Видео", label: "video" },
  ],
  tabPanel: [
    { name: "Миссия", content: <Mission />, label: "mission" },
    { name: "Наши преимущества", content: <Advantages />, label: "advantages" },
    { name: "Партнеры", content: <Partners />, label: "partners" },
    {
      name: "Финансовые показатели",
      content: <Financial_Indicators />,
      label: "financial-indicators",
    },
    { name: "Видео", content: <VideoTab />, label: "video" },
  ],
};
