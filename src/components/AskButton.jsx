import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled.div`
  width: fit-content;
  height: 2rem;

  a {
    height: 100%;
    min-width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2f89ff;
    text-decoration: none;
    color: black;
    font-weight: 700;
    border-radius: 0.2rem;
  }
`;

const AskButton = ({ question, route, value }) => {
  const handleClick = (value) => {
    console.log(value);
  };
  return (
    <LinkStyled onClick={() => handleClick(value)}>
      <Link to={route}>{question}</Link>
    </LinkStyled>
  );
};

export default AskButton;
