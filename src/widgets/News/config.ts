import card from "@/public/assets/images/card.png";
import { StaticImageData } from "next/image";

interface NewsItem {
  day: string;
  title: string;
  img: StaticImageData;
}

export const newsData: NewsItem[] = [
  {
    day: "Сегодня",
    title: "Является ли инфаркт и инсульт страховым случаем?",
    img: card,
  },
  {
    day: "Сегодня",
    title: "Является ли инфаркт и инсульт страховым случаем?2",
    img: card,
  },
  {
    day: "Сегодня",
    title: "Является ли инфаркт и инсульт страховым случаем?3",
    img: card,
  },
  {
    day: "Сегодня",
    title: "Является ли инфаркт и инсульт страховым случаем4?",
    img: card,
  },
];
