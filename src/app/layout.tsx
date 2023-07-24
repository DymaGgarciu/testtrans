import "@styles/globals.scss";
import React from "react";
import Header from "@src/components/Header/Header";
import { roboto, manrope } from "@src/app/fonts";
import Footer from "@src/components/Footer/Footer";

interface Metadata {
  title: string;
  description: string;
}
interface LayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Transelit",
  description: "Best insurance in the world",
};

function RootLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${roboto.variable}  ${manrope.variable}`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
