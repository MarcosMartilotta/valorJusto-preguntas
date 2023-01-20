import styled from "styled-components";
import AskButton from "../components/AskButton";

const StyledSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
      margin-bottom: 1rem;
    }
  }
`;

const BudgetPage = () => {
  return (
    <StyledSection>
      <h2>¿Cual es su presupuesto?</h2>
      <div>
        <input type="number" placeholder="$90000" />
        <AskButton
          question={`Muéstrame las propiedades que me convienen`}
          route="/results"
        ></AskButton>
      </div>
    </StyledSection>
  );
};

export default BudgetPage;
