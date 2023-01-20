import styled from "styled-components";
import AskButton from "../components/AskButton";
import questions from "../helpers/questions";

const MainComponent = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10rem 1fr;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .questions {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
const Root = () => {
  return (
    <>
      <MainComponent>
        <section className="hero">
          <h1>El precio Justo</h1>
          <p>
            ¿Querés saber si tu alquiler es caro? ¿Si la casa que viste vale
            realmente lo que te dicen? ¡Estás en el sitio correcto!
          </p>
        </section>
        <section className="questions">
          <AskButton
            route={"/ambients"}
            question={questions.welcome.one}
          ></AskButton>
          <AskButton
            route={"/stadistics"}
            question={questions.welcome.two}
          ></AskButton>
        </section>
      </MainComponent>
    </>
  );
};

export default Root;
