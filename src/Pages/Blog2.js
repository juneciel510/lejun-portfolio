import React from "react";
import PDFReader from "../Components/PDFReader/PDFReader";
import PDFfile from "../files/ExamReport_Lejun4.pdf";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const Blog2 = () => {
  return (
    <BlogsStyled>
      <PDFReader file={PDFfile} />
    </BlogsStyled>
  );
};
const BlogsStyled = styled.div``;
export default Blog2;
