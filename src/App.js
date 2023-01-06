import { Body } from "./body/Body";
import styled from 'styled-components';
import { CalcProvider } from "./context/CalcContex";

function App() {
  return (
    <CalcProvider>
      <Container>
        <Body />
      </Container>
    </CalcProvider>

  );
}

export default App;

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

