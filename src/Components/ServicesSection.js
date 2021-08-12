import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import book from "../img/book.svg";
import intelligence from "../img/intelligence.svg";
import collaborate from "../img/collaborate.svg";
import reliable from "../img/reliable.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Strengths"} span={"Strengths"} />
        <div className="services">
          <ServiceCard image={book} title={"Quick learning"} />
          <div className="mid-card">
            <ServiceCard image={intelligence} title={"Coding enthusiast"} />
          </div>
          <ServiceCard image={collaborate} title={"Collaborate"} />
          <ServiceCard image={reliable} title={"Reliable"} />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 502px) {
      margin-top: 2rem;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
