import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
const Blog3 = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <ul>
          <li>Figma</li>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
          <li>C#</li>
          <li>Docker</li>
        </ul>
      </BlogsStyled>
    </MainLayout>
  );
};
const BlogsStyled = styled.div`
  ul {
    list-style-type: circle;
  }
`;
export default Blog3;
