import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import TryButton from "../Components/TryButton";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Blog4 = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <h2 className="title">Good tutorials</h2>
        <div className="table-container">
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Link 1</Th>
                <Th>Link 2</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td> Deploy React App to Github Pages</Td>
                <Td>
                  <a href="https://www.youtube.com/watch?v=v1-bvNlaXE4">
                    YouTube
                  </a>
                </Td>
                <Td>
                  <a href="https://www.youtube.com/watch?v=A6mD1TCEb40&list=WL&index=8">
                    YouTube
                  </a>
                </Td>
              </Tr>
              <Tr>
                <Td> Introduction to CSS</Td>
                <Td>
                  <a href="https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9D0J0Mtp6lIiD_8046k3si">
                    YouTube
                  </a>
                </Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td> to be continued...</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </BlogsStyled>
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
export default Blog4;
