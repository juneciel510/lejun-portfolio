import React from "react";
import PDFReader from "../Components/PDFReader/PDFReader";
import PDFfile from "../files/ExamReport_Lejun4.pdf";
import styled from "styled-components";
import Particle from "../Components/Particle";

const Portfolio3 = () => {
  return (
    <Portfolio3Styled>
      <Particle />
      <p>Coming Soon...</p>
    </Portfolio3Styled>
  );
};

const Portfolio3Styled = styled.section`
  p {
    margin: -28rem;
    text-align: center;
    color: var(--primary-color-light);
    font-size: 6rem;
  }
`;
export default Portfolio3;
