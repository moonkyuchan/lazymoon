import styled from "styled-components";

export default function MobileApp() {
  return <Container>App</Container>;
}

const Container = styled.div(({ theme }) => {
  return {
    width: "200px",
    height: "100%",
    backgroundColor: theme.colors.black,
  };
});
