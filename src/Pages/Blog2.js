import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import TryButton from "../Components/TryButton";
import { ResponsiveTable, BlogTitle } from "../styles/BlogStyle";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const Blog2 = () => {
  return (
    <MainLayout>
      <BlogTitle>
        <h5 className="title">Some useful packages for React JS</h5>
      </BlogTitle>
      <ResponsiveTable>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Link</Th>
              <Th>Note</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>PDF viewer for browser</Td>
              <Td>
                <a href="https://www.youtube.com/watch?v=V_06_fCbLFw">
                  YouTube
                </a>
              </Td>
              <Td>
                <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1A5aXo1SFk2N0xRTWxmY2pOWjJTNzl6d2hld3xBQ3Jtc0tsQVROd0djaURQWTlRSDIzVGlzekxGQWp2aG5ZWGdUUlZzcDBvQW5ka3MtSEdTYm4wb2F6c0k5S3owQlNzdm5WS0N4TlR3Zm1KRnpJQ2FBa1FkRzlJcnViU0hrVE9Zckpzakc3Mkk0cVQ0eUtwbjc2OA&q=https%3A%2F%2Fgithub.com%2FLanciWeb%2Freact-pdf-reader%2Farchive%2Fmain.zip">
                  Download
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td>Responsive table</Td>
              <Td>
                <a href="https://www.npmjs.com/package/react-super-responsive-table">
                  npm
                </a>
              </Td>
              <Td></Td>
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
};

const BlogsStyled = styled.div`
  .title {
    color: var(--primary-color);
  }
  .table-container {
    margin-top: 2.5rem;
    color: var(--white-color);
    Td {
      height: 4rem;
      padding: 3rem, 2rem;
    }
  }
  a {
    text-decoration: none;
  }
  .responsiveTable tbody tr {
    padding: 1.25em;
    margin: 1rem 0;
    height: 3rem;
  }

  //zebra stripped table
  .responsiveTable tbody tr:nth-child(odd) {
    background: var(--background-light-color-2);
  }
`;
export default Blog2;
