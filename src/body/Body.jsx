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
`;
