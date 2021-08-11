import React from "react";
import PDFReader from "../Components/PDFReader/PDFReader";
import PDFfile from "../files/CV_of_Lejun_Chen_no_contact.pdf";
import styled from "styled-components";

const ResumePDF = () => {
  return (
    <div>
      <PDFReader file={PDFfile} />
    </div>
  );
};

export default ResumePDF;
