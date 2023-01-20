import React from "react";
import AskButton from "../components/AskButton";
import questions from "../helpers/questions";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 8rem 1fr;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  div > div {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;

const AmbientsPage = () => {
  const handleClick = () => {
    console.log("prueba");
  };

  return (
    <StyledSection>
      <h2>¿Cuantos ambientes desea?</h2>
      <div>
        <AskButton
          className="button"
          question={questions.ambients.one}
          route="/type"
          value="1"
        />
        <AskButton
          className="button"
          question={questions.ambients.two}
          route="/type"
          value="2"
          onClick={handleClick}
        />
        <AskButton
          className="button"
          question={questions.ambients.three}
          route="/type"
          value="3"
          onClick={handleClick}
        />
        <AskButton
          className="button"
          question={questions.ambients.four}
          route="/type"
          value="4"
          onClick={handleClick}
        />
        <AskButton
          className="button"
          question={questions.ambients.five}
          route="/type"
          value="5"
          onClick={handleClick}
        />
      </div>
    </StyledSection>
  );
};

export default AmbientsPage;
