import styled from "styled-components";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export const ResponsiveTable = styled.div`
  a {
    /* text-decoration: none; */
  }
  .responsiveTable {
    height: 3rem;
    line-height: 3rem;
    width: 100%;
  }

  .responsiveTable tr {
  }

  .responsiveTable #text {
    padding-left: 0.5rem;
  }

  .responsiveTable thread {
    color: var(--white-color);
  }

  .responsiveTable tbody {
    color: var(--font-light-color);
  }

  .responsiveTable tbody tr:nth-child(odd) {
    background: var(--background-light-color-2);
  }
`;

export const BlogTitle = styled.div`
  margin-bottom: 1rem;
  .title {
    color: var(--primary-color);
  }
`;
