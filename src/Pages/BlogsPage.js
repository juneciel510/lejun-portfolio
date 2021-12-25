import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import blogs from "../data/blogs";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <Link to={blog.link}>
                  <div className="image">
                    <img src={blog.image} alt="" />
                  </div>
                  <p>{blog.title}</p>
                </Link>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    @media screen and (max-width: 1600px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 670px) {
      grid-template-columns: repeat(1, 1fr);
    }
    /* 3D effect */
    .blog-item {
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      background: rgba(255, 255, 255, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);
    }
    .blog-item {
      background-color: var(--sidebar-dark-color);
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      a {
        text-decoration: none;
      }
      p {
        margin-left: 0.3rem;
        color: var(--primary-color);
        padding-bottom: 0.4rem;
        font-size: 0.95rem;
      }
      &:hover {
        cursor: pointer;
        color: var(--primary-color);
        box-shadow: 1.5px 1.5px 4px var(--primary-color),
          -1.5px -1.5px 4px var(--primary-color);
        p {
          color: var(--background-light-color-2);
        }
      }
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
      }
    }

    .title {
      padding: 1rem 0.5;
      a {
        margin: 0, 0.5rem;
        text-decoration: none;
        font-size: 1rem;
        padding: 1rem 0.5;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
