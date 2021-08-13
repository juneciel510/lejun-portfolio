import React from "react";
import MyPDFReader from "../Components/MyPDFReader";
import PDFfile from "../files/ExamReport_Lejun4.pdf";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const Portfolio1 = () => {
  return <MyPDFReader PDFfile={PDFfile}></MyPDFReader>;
};

export default Portfolio1;
