import styled from "styled-components";
import Header from "@/Layout/Header";
import { createGlobalStyle } from "styled-components";

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
    <>
      {/* <BodyStyles /> */}
      <Header />
      <StyledContent>사진</StyledContent>
    </>
  );
}

const StyledContent = styled.div(({ theme }) => {
  return {};
});
