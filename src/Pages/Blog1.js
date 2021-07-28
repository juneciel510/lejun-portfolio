import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import pdfFile from "../files/ExamReport_Lejun4.pdf";
import TryButton from "../Components/TryButton";
import { MainLayout, InnerLayout } from "../styles/Layouts";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Blog1() {
  return (
    <MainLayout>
      <BlogsStyled>
        <h2 className="title">What You Need To Know About CSS Styling</h2>
        <div className="table-container">
          <Table>
            <Thead>
              <Tr>
                <Th>Style</Th>
                <Th>Video</Th>
                <Th>Try</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Flex Box</Td>
                <Td>
                  <a href="https://www.youtube.com/watch?v=fYq5PXgSsbE">
                    YouTube
                  </a>
                </Td>
                <Td>
                  <TryButton url="https://codepen.io/WebDevSimplified/pen/rqNVVb" />
                </Td>
              </Tr>
              <Tr>
                <Td>CSS Position</Td>
                <Td>
                  <a href="https://www.youtube.com/watch?v=jx5jmI0UlXU">
                    YouTube
                  </a>
                </Td>

                <Td>
                  <TryButton url="https://codepen.io/WebDevSimplified/pen/VNRMNP" />
                </Td>
              </Tr>
              <Tr>
                <Td>CSS Grid</Td>
                <Td>
                  <a href="https://www.youtube.com/watch?v=EFafSYg-PkI">
                    YouTube
                  </a>
                </Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>CSS Animation</Td>
                <Td>
                  <a href="https://www.youtube.com/watch?v=YszONjKpgg4&list=PLZlA0Gpn_vH8mpXIUHjWoMAAgoCEinL0R">
                    YouTube
                  </a>
                </Td>

                <Td>
                  <TryButton url="https://codepen.io/WebDevSimplified" />
                </Td>
              </Tr>
              <Tr>
                <Td>To be continued...</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .title {
    color: var(--primary-color);
  }
  .table-container {
    margin-top: 2.5rem;
    color: var(--white-color);
    padding: 0.3rem, 2rem;
  }
  a {
    text-decoration: none;
  }
  .responsiveTable tbody tr {
    padding: 1.25em;
    margin: 1rem;
    height: 3rem;
  }

  .responsiveTable tbody tr:nth-child(odd) {
    background: var(--background-light-color-2);
  }
`;
export default Blog1;
