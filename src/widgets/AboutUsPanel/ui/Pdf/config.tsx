import { Tabs } from "@src/widgets/AboutUsPanel/ui/config";
import PdfFileGroup from "@src/widgets/AboutUsPanel/ui/Pdf/PdfFileGroup";

export const pdfTabs: Tabs = {
  tabs: [
    { id: "11", name: "2017", label: "2017" },
    { id: "22", name: "2018", label: "2018" },
    { id: "33", name: "2019", label: "2019" },
    { id: "44", name: "2020", label: "2020" },
    { id: "55", name: "2021", label: "2021" },
    { id: "66", name: "2022", label: "2022" },
    { id: "77", name: "2023", label: "2023" },
  ],
  tabPanel: [
    { name: "2017", content: <PdfFileGroup year="2017" />, label: "2017" },
    { name: "2018", content: <PdfFileGroup year="2018" />, label: "2018" },
    { name: "2019", content: <PdfFileGroup year="2019" />, label: "2019" },
    {
      name: "2020",
      content: <PdfFileGroup year="2020" />,
      label: "2020",
    },
    { name: "2021", content: <PdfFileGroup year="2021" />, label: "2021" },
    { name: "2022", content: <PdfFileGroup year="2022" />, label: "2022" },
    { name: "2023", content: <PdfFileGroup year="2023" />, label: "2023" },
  ],
};

interface PdfData {
  title: string;
  lang: string;
}

interface PdfListData {
  [key: string]: PdfData[];
}

export const pdfListData: PdfListData = {
  "2017": [
    {
      title: "Отчёт о платежеспособности и финансовом состоянии за 2023 год",
      lang: "ENG",
    },
    {
      title: "Отчёт о платежеспособности и финансовом состоянии за 2023 год",
      lang: "RU",
    },
    { title: "Отчёт", lang: "RU" },
  ],
  "2018": [
    {
      title: "Отчёт о платежеспособности и финансовом состоянии за 2023 год",
      lang: "ds",
    },
    { title: "gdfgdf", lang: "ds" },
    { title: "dfgfdgfd", lang: "ds" },
  ],
  "2019": [
    { title: "dfdfgdf", lang: "df" },
    { title: "aaaaaaaaaaaa", lang: "df" },
    { title: "dfgdfgdf", lang: "df" },
  ],
  "2020": [
    { title: "dffffffffffffffffffffdfg", lang: "dfg" },
    { title: "dfggggggggggggggggdfgdfg", lang: "dfg" },
    { title: "dfgggggggggggggggdfgdfgdd", lang: "dfgd" },
  ],
  "2021": [
    { title: "dgdf", lang: "df" },
    { title: "dfgdg", lang: "df" },
    { title: "dfgddf", lang: "fg" },
  ],
  "2022": [
    { title: "dfgd", lang: "yu" },
    { title: "banan", lang: "yu" },
    { title: "ananas", lang: "yu" },
  ],
  "2023": [
    { title: "lala", lang: "yu" },
    { title: "lalala", lang: "yu" },
    { title: "lalalal", lang: "yu" },
  ],
};
