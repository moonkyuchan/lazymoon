import styled from "styled-components";
import Header from "@/Layout/Header";
import Dashboard from "@/Components/Dashboard";

// const BodyStyles = createGlobalStyle`
// 	body {
// 		overflow-x: hidden;
// 		overflow-y: auto;

// 		&::-webkit-scrollbar {
// 			max-width: 0px;
// 			max-height: 0px;
// 			display: none;
// 		}

// 		&::-webkit-scrollbar-thumb {
// 			background-color: transparent;
// 		}
// 	}
// `;

export default function MobileApp() {
  return (
    <StyledLayout>
      <Header />
      <Dashboard />
    </StyledLayout>
  );
}

const StyledLayout = styled.section(({ theme }) => {
  return {
    position: "relative",
    minWidth: "360px",
    display: "flex",
    flexDirection: "column",
    height: "1000px",
  };
});
