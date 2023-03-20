import styled from "styled-components";

export default function App() {
  return <Container>App</Container>;
}

const Container = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.colors.black,
  };
});
