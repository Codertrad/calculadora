import styled from "styled-components";
import { Screen } from "./Screen";
import { ButtonsContainer } from "../buttons/ButtonsContainer";

export const Body = () => {
  return (
    <Container>
      <Screen />
      <ButtonsContainer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #434242;
  border-radius: 10px;
  width: 80%;
  @media (min-width: 768px) {
    max-width: 50%;
  }
  @media (min-width: 1024px) {
    max-width: 30%;
  }
    @media (min-width: 1440px) {
    max-width: 20%;
  }
`;
