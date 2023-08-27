import { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
export default function Spinner(): ReactElement {
  return (
    <StyledSpinnerWrap>
      <StyledSpinner />
    </StyledSpinnerWrap>
  );
}
const StyledSpinnerWrap = styled.div(({}) => {
  return {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const StyledSpinner = styled.div`
  border: 8px solid #565656;
  border-left-color: #f6f6f6;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spinAnimation} 1s linear infinite;
`;
