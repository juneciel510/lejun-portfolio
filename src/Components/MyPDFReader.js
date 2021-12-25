import React from "react";
import PDFReader from "../Components/PDFReader/PDFReader";
// import PDFfile from "../files/ExamReport_Lejun4.pdf";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const MyPDFReader = ({ PDFfile }) => {
  return (
    <Portfolio1Styled>
      <div className="container">
        <PDFReader className="PDF-reader" file={PDFfile} />
      </div>
    </Portfolio1Styled>
  );
};

const Portfolio1Styled = styled.div`
  @media screen and (max-width: 1200px) {
    margin-top: 50px;
  }
  .reader-container {
    overflow: hidden;
  }
`;

export default MyPDFReader;
