import React from "react";
import MyPDFReader from "../Components/MyPDFReader";
import PDFfile from "../files/CV_of_Lejun_Chen_no_contact.pdf";
import styled from "styled-components";

const ResumePDF = () => {
  return <MyPDFReader PDFfile={PDFfile}></MyPDFReader>;
};

export default ResumePDF;
