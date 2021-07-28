import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
const Blog3 = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <h2 className="title">Learning List</h2>
        <ul>
          <li>Figma</li>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
          <li>C#</li>
          <li>Docker</li>
          <li>more...</li>
        </ul>
      </BlogsStyled>
    </MainLayout>
  );
};
const BlogsStyled = styled.div`
  .title {
    color: var(--primary-color);
  }
  ul {
    margin-top: 1.5rem;
    padding-left: 1.5rem;
    color: var(--white-color);
    li {
    }
  }
`;
export default Blog3;
