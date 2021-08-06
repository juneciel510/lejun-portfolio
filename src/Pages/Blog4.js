import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import TryButton from "../Components/TryButton";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { ResponsiveTable, BlogTitle } from "../styles/BlogStyle";

const Blog4 = () => {
  return (
    <MainLayout>
      <BlogTitle>
        <h2 className="title">Good tutorials</h2>
      </BlogTitle>
      <ResponsiveTable>
        <Table>
          <Thead>
            <Tr>
              <Th>Title</Th>
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
              <Td>
                <a href="https://www.youtube.com/playlist?list=PL7TLF4T4Tq2RCWa-ZRkEWXVtXteyZ2CjK">
                  YouTube
                </a>
              </Td>
            </Tr>
            <Tr>
              <Td> to be continued...</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </ResponsiveTable>
    </MainLayout>
  );
};

export default Blog4;
