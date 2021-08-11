import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import pdfFile from "../files/ExamReport_Lejun4.pdf";
import TryButton from "../Components/TryButton";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import { ResponsiveTable, BlogTitle } from "../styles/BlogStyle";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

function Blog1() {
  return (
    <MainLayout>
      <BlogTitle>
        <h5 className="title">What You Need To Know About CSS Styling</h5>
      </BlogTitle>
      <ResponsiveTable>
        <Table>
          <Thead>
            <Tr>
              <Th>Style</Th>
              <Th>Video</Th>
              <Th>Note</Th>
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
                <a href="https://www.youtube.com/watch?v=PjUCq04ebVA&list=PL7TLF4T4Tq2RCWa-ZRkEWXVtXteyZ2CjK&index=33">
                  YouTube
                </a>
              </Td>
              <Td>
                <TryButton url="https://codepen.io/WebDevSimplified" />
              </Td>
            </Tr>
            <Tr>
              <Td>CSS Inheritance</Td>
              <Td>
                <a href="https://www.youtube.com/watch?v=N8tFrMZp_wA&list=PLZlA0Gpn_vH9D0J0Mtp6lIiD_8046k3si&index=18">
                  YouTube
                </a>
              </Td>
              <Td>
                <a href="https://www.youtube.com/watch?v=dFSxBi2zGfM&list=PL7TLF4T4Tq2RCWa-ZRkEWXVtXteyZ2CjK&index=14">
                  YouTube
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>to be continued...</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </ResponsiveTable>
    </MainLayout>
  );
}

export default Blog1;
