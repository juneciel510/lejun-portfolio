import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import pdfFile from "../files/ExamReport_Lejun4.pdf";
import pdfFile2 from "./sample.pdf";

import { MainLayout, InnerLayout } from "../styles/Layouts";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Blog1(props) {
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <MainLayout>
      <BlogsStyled>
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div``;
export default Blog1;
