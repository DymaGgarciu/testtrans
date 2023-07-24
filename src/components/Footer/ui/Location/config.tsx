import { Tabs } from "@src/widgets/AboutUsPanel/ui/config";
import Information from "@src/components/Footer/ui/Info/Information";

export const contactsTabs: Tabs = {
  tabs: [
    { id: "764231", name: "Кишинэу", label: "Chisinau" },
    { id: "908532", name: "Бельцы", label: "Balti" },
    { id: "123456", name: "Единцы", label: "Edinet" },
  ],
  tabPanel: [
    {
      name: "Кишинэу",
      content: <Information city="Chisinau" />,
      label: "Chisinau",
    },
    { name: "Бельцы", content: <Information city="Balti" />, label: "Balti" },
    { name: "Единцы", content: <Information city="Edinet" />, label: "Edinet" },
  ],
};
