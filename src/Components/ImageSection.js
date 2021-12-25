import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import resume1 from "../img/resume1.jpg";
import resume3 from "../img/resume3.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume3} alt="" />
      </div>
      <div className="right-content">
        <h3 className="item">
          I am <span>Lejun Chen</span>
        </h3>
        <p className="paragraph item">
          Computer Science student of a two years’ master program at the
          University of Stavanger. Moved to Stavanger in 2019 with the whole
          family. Have 10+ years’ work experience as a project coordinator and
          document engineer. I enjoy the fun of coding and look forward to start
          a new career as a developer with the passion of coding.
        </p>
        <div className="about-info item">
          <table class="a">
            <tr>
              <th scope="row">Name</th>
              <td>Lejun Chen</td>
            </tr>
            <tr>
              <th scope="row">Gender</th>
              <td>Female</td>
            </tr>
            <tr>
              <th scope="row">Languages</th>
              <td>Mandarin, English, Norwegian</td>
            </tr>
            <tr>
              <th scope="row">Skills</th>
              <td>Javascript, React, Go, Python, R</td>
            </tr>
            <tr>
              <th scope="row">Location</th>
              <td>Stavanger</td>
            </tr>
          </table>
        </div>
        <PrimaryButton className="item" title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .left-content {
    img {
      height: 100%;
      object-fit: cover;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 502px) {
    margin-top: 2rem;
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item {
      display: block;
    }
    .paragraph {
      padding: 0.5rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1vh;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
      }
    }

    table.a {
      table-layout: auto;
      width: 100%;
      vertical-align: top;
      th {
        vertical-align: top;
        color: var(--white-color);
      }
      td {
        padding-left: 20px;
        color: var(--font-light-color);
      }
    }
  }
`;
export default ImageSection;
