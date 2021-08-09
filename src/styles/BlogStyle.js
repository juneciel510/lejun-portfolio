import styled from "styled-components";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export const ResponsiveTable = styled.div`
  a {
    /* text-decoration: none; */
    &:hover {
      /* background-color: var(--primary-color); */
      color: var(--primary-color);
      text-shadow: 1.5px 1.5px 4px var(--primary-color),
        -1.5px -1.5px 4px var(--primary-color);
    }
  }
  .responsiveTable {
    height: 3rem;
    line-height: 3rem;
    width: 100%;
  }

  .responsiveTable tr {
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
  @media screen and (max-width: 502px) {
    .responsiveTable td .tdBefore {
      left: 0;
    }
    .responsiveTable tbody {
      font-size: 0.7rem;
    }

    .responsiveTable td.pivoted {
      padding-left: calc(35% + 10px) !important;
    }
  }
`;

export const BlogTitle = styled.div`
  margin-bottom: 1rem;
  .title {
    color: var(--primary-color);
  }
`;
