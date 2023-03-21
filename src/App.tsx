import styled from "styled-components";
import Header from "@/Layout/Header";

export default function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div(({ theme }) => {
  return {
    // backgroundColor: theme.colors.black,
  };
});
