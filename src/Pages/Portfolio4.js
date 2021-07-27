import React from "react";
import PDFReader from "../Components/PDFReader/PDFReader";
import PDFfile from "../files/ExamReport_Lejun4.pdf";
import styled from "styled-components";

const Portfolio4 = () => {
  return (
    <div>
      <PDFReader file={PDFfile} />
    </div>
  );
};

export default Portfolio4;
