import { useState } from "react";

import { GlobalStyle } from "./style/GlobalStyle";
import { Container, Row } from "./style/styles";

import { ComponentButton } from "./components/Button/Button";

function App() {
  const [active, setActive] = useState(false);

  function changeColor() {
    setActive(!active);
  }

  if (active) {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <h2>Props</h2>
        <Row>
          <p className="under">color</p>
          <p>primary</p>
          <div>
            <ComponentButton>Text</ComponentButton>
            <ComponentButton disabled>Text</ComponentButton>
          </div>
          <p>secondary</p>
          <div>
            <ComponentButton buttonType="secondary">Text</ComponentButton>
            <ComponentButton buttonType="secondary" disabled>
              Text
            </ComponentButton>
          </div>
          <p className="under">icon</p>
          <div>
            <ComponentButton>Text</ComponentButton>
            <ComponentButton icon="arrow-right">Text</ComponentButton>
            <ComponentButton icon="check">Text</ComponentButton>
            <ComponentButton icon="refresh">Text</ComponentButton>
          </div>
          <p className="under">Function</p>
          <div>
            <ComponentButton onClick={changeColor} icon="check">
              Clique aqui
            </ComponentButton>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
