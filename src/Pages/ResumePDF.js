import React from "react";
import MyPDFReader from "../Components/MyPDFReader";
import PDFfile from "../files/LejunChen_SoftwareDeveloper_2025_NoContact.pdf";
import styled from "styled-components";

const ResumePDF = () => {
  return <MyPDFReader PDFfile={PDFfile}></MyPDFReader>;
};

export default ResumePDF;
