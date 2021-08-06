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
        <h3>
          I am <span>Lejun Chen</span>
        </h3>
        <p className="paragraph">
          Computer Science student of a two years’ master program at the
          University of Stavanger. Moved to Stavanger in 2019 with the whole
          family. Have 10+ years’ work experience as a project coordinator and
          document engineer. I enjoy the fun of coding and look forward to start
          a new career as a developer with the passion of coding.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Gender</p>
            <p>Age</p>
            <p>Languages </p>
            <p>Location</p>
            {/* <p>Service</p> */}
          </div>
          <div className="info">
            <p>: Lejun Chen</p>
            <p>: Female</p>
            <p>: 40</p>
            <p>: Mandarin, English, Norwegian </p>
            <p>: Stavanger, Norway</p>
            {/* <p>: Freelance</p> */}
          </div>
        </div>
        {/* <PrimaryButton title={"Download Cv"} /> */}
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .left-content {
    img {
      height: 91%;
      object-fit: cover;
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
    /* h4 {
      font-size: 2.2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    } */
    .paragraph {
      padding: 0.5rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.8rem;
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
  }
`;
export default ImageSection;
