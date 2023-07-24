import { Roboto, Manrope } from "@next/font/google";

export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-manrope",
});
