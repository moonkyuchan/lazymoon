import styled from "styled-components";
import Header from "@/Layout/Header";
import Dashboard from "@/Components/Dashboard";

export default function App() {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}

const Container = styled.div(({ theme }) => {
  return {
    // backgroundColor: theme.colors.black,
  };
});
