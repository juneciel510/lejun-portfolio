import React from "react";
import PDFReader from "../Components/PDFReader/PDFReader";
import PDFfile from "../files/ExamReport_Lejun4.pdf";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const Portfolio1 = () => {
  return (
    <Portfolio1Styled>
      <div className="container">
        <PDFReader className="PDF-reader" file={PDFfile} />
      </div>
    </Portfolio1Styled>
  );
};

const Portfolio1Styled = styled.div`
  width: 100vw;
  height: 100vh;
  .container {
    margin: 0, 4vw;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
      margin: 42px 4vw;
    }
    @media screen and (max-width: 642px) {
      margin: 42px 0.4rem;
    }
  }

  .reader-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* margin: 0 0 0 12px; */
  }
`;

export default Portfolio1;
