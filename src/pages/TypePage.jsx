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

const TypePage = () => {
  return (
    <StyledSection>
      <h2>¿Que tipo de propiedad busca?</h2>
      <div>
        <AskButton
          className="button"
          question={questions.type.ph}
          route="/budget"
          value="ph"
        />
        <AskButton
          className="button"
          question={questions.type.casa}
          route="/budget"
          value="casa"
        />
        <AskButton
          className="button"
          question={questions.type.departamento}
          route="/budget"
          value="departamento"
        />
      </div>
    </StyledSection>
  );
};

export default TypePage;
