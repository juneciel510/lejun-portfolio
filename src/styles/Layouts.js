import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width: 642px) {
    padding: 4rem 0.4rem;
  }
  /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
  @media screen and (max-width: 571px) {
    padding: 2rem 1.2rem 2rem 0.8rem;
    margin-right: 0.5rem;
  }
`;
export const InnerLayout = styled.div`
  padding: 5rem 0;
  @media screen and (max-width: 571px) {
    padding: 2rem 0.4rem;
  }
  /* border: 5px solid red; */
`;
