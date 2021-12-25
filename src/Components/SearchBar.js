import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  return (
    <SearchBarStyled>
      <div className="container-search-bar ">
        <form onSubmit={props.loadweather}>
          <div>{props.error ? error() : ""}</div>
          <div className="row">
            <input
              type="text"
              className="city"
              placeholder="City"
              name="city"
              autoComplete="on"
            />

            <button className="search-form__btn" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    </SearchBarStyled>
  );
};

const error = (props) => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City ...
    </div>
  );
};

const SearchBarStyled = styled.div`
  width: 100%;
  margin-top: 3rem;
  color: var(--white-color);
  form {
    width: 100%;
  }
  .row {
    margin: auto;
    width: 50%;
    justify-content: center;
  }

  .mx-5 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  @media screen and (max-width: 920px) {
    .row {
      width: 100%;
    }
  }
  @media screen and (max-width: 644px) {
    margin-top: 10px;
    .row {
      width: 100%;
    }
  }

  .ifused {
    background-color: var(--background-dark-color);
  }
  input {
    background-color: var(--background-light-color);
    border: 1px solid var(--white-color);
    color: var(--white-color);
    width: 77%;
    padding: 0.1rem 0.3;
    text-align: center;
    ::-webkit-input-placeholder {
      /* Edge */
      color: #999b84;
      text-align: center;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #999b84;
    }

    ::placeholder {
      color: #999b84;
    }
  }
  .input {
  }
  .city {
    /* border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem; */
    border-radius: 0.5rem;
  }

  .search-form__btn {
    width: 6%;
    background: transparent;
    border: solid 1px var(--background-dark-color);
    color: var(--white-color);
    padding: 0.3rem 0;
    FontAwesomeIcon {
      color: var(--white-color);
    }
    .fa-search {
      color: var(--white-color);
      vertical-align: -0.3rem;
      margin-left: 0.2rem;
    }
  }
`;

export default SearchBar;
