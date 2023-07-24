import React from "react";
import { pdfListData } from "./config";
import { StaticImageData } from "@node_modules/next/image";
import PdfFile from "@src/widgets/AboutUsPanel/ui/Pdf/PdfFile";

interface PdfFileGroupProps {
  year: string;
}

const PdfFileGroup = (props: PdfFileGroupProps) => {
  const { year } = props;
  return (
    <div>
      {pdfListData[year].map((pdf, i) => (
        <PdfFile key={i} title={pdf.title} lang={pdf.lang} />
      ))}
    </div>
  );
};
export default PdfFileGroup;
