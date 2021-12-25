import React from "react";
import styled from "styled-components";

function ServiceCard({ image, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="" width="85px" />
        <h6>{title}</h6>
      </div>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div`
  border-top: 8px solid transparent;
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    /* transform: translateY(3px); */
  }
  .container {
    padding: 1.2rem;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: rgba(100, 100, 100, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h6 {
      color: var(--white-color);
      padding: 1rem 0;
      position: relative;
    }

    p {
      padding: 0.8rem 0;
    }
  }
`;

export default ServiceCard;
