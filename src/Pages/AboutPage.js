import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSetion";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <div className="strengths">
          <ServicesSection />
          {/* <ReviewsSection /> */}
        </div>
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section`
  .strengths {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#2196f3, #e91e63);
      clip-path: circle(12% at right 35%);
      z-index: -1;
    }
  }
`;

export default AboutPage;
