import styled from "styled-components";
import Header from "@/Layout/Header";
import Dashboard from "@/Components/Dashboard";
import { createGlobalStyle } from "styled-components";

const BodyStyles = createGlobalStyle`
	body {
		overflow-x: hidden;
		overflow-y: auto;
    -ms-overflow-style:none;

		&::-webkit-scrollbar {
      max-width: 0px;
			max-height: 0px;
			display: none;
		}
    
		&::-webkit-scrollbar-thumb {
      background-color: transparent;
		}
  }
`;

export default function MobileApp() {
  return (
    <>
      <BodyStyles />
      <StyledLayout>
        <Header />
        <Dashboard />
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.section(({}) => {
  return {
    position: "relative",
    minWidth: "360px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "52px",
    height: "100vh",
  };
});
