import mapImg from "@/public/assets/images/map.png";
import { StaticImageData } from "next/image";

interface AddressData {
  [city: string]: {
    img: StaticImageData;
    data: {
      name: string;
      info: string;
    }[];
  };
}
export const addressData: AddressData = {
  Chisinau: {
    img: mapImg,
    data: [
      { name: "Адрес", info: "Strada 31 August 1989 nr 31, Chişinău" },
      { name: "Телефон", info: "022 549 954" },
      { name: "Email", info: "info@transelit.md" },
      { name: "Рабочие часы", info: "Понедельник - Пятница: 09:00 - 17:00" },
    ],
  },
  Balti: {
    img: mapImg,
    data: [
      { name: "Адрес", info: "Strada 1 August 1989 nr 31, Chişinău1" },
      { name: "Телефон", info: "022 549 954 1" },
      { name: "Email", info: "info@transelit.md 1" },
      {
        name: "Рабочие часы",
        info: "Понедельник - Пятница: 09:00 - 17:00 1",
      },
    ],
  },
  Edinet: {
    img: mapImg,
    data: [
      { name: "Адрес", info: "Strada 1 August 1989 nr 31, Chişinău2" },
      { name: "Телефон", info: "022 549 954 2" },
      { name: "Email", info: "info@transelit.md 2" },
      {
        name: "Рабочие часы",
        info: "Понедельник - Пятница: 09:00 - 17:00 2",
      },
    ],
  },
};
