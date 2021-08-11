import styled from "styled-components";

export const MainLayout = styled.div`
  /* padding: 5rem; */
  padding: 4vw;
  @media screen and (max-width: 642px) {
    padding: 4rem 0.4rem;
  }
  /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
  @media screen and (max-width: 571px) {
    padding: 5rem 0.8rem 5rem 0.8rem;
  }
`;
export const InnerLayout = styled.div`
  padding: 5rem 0;
  @media screen and (max-width: 571px) {
    padding: 2rem 0.4rem;
  }
  /* border: 5px solid red; */
`;
