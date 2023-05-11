import styled from "styled-components";
import Header from "@/Layout/Header";
import Dashboard from "@root/src/Mobile/Components/Dashboard";

export default function App() {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}

const Container = styled.div(({}) => {
  return {
    // backgroundColor: theme.colors.black,
  };
});
