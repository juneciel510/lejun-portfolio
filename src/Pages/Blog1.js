import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import pdfFile from "../files/ExamReport_Lejun4.pdf";
import TryButton from "../Components/TryButton";

import { MainLayout, InnerLayout } from "../styles/Layouts";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Blog1() {
  return (
    <MainLayout>
      <BlogsStyled>
        <h2 className="title">About CSS Styling</h2>
        <div className="container">
          <h4 className="sub-title">Flex Box</h4>
          <TryButton url="https://codepen.io/WebDevSimplified/pen/rqNVVb" />
        </div>
        <div className="w3-responsive">
          <table className="w3-table w3-striped">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
            <tr>
              <td>Flex Box</td>
              <td>
                <TryButton url="https://codepen.io/WebDevSimplified/pen/rqNVVb" />
              </td>
            </tr>
            <tr>
              <td>Flex Box</td>
              <td>normal</td>
            </tr>
            <tr>
              <td>Flex Box</td>
              <td>normal</td>
            </tr>
          </table>
        </div>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .w3-responsive {
    width: 60%;
  }
`;
export default Blog1;
