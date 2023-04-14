import { ReactElement } from "react";
import styled from "styled-components";

export default function WebHeader(): ReactElement {
  return (
    <StyledHeader>
      <StyledRow>
        <div>햄버거</div>
        <div>검색</div>
        <div></div>
      </StyledRow>
    </StyledHeader>
  );
}

const StyledHeader = styled.header(({ theme }) => {
  return { backgroundColor: "blue", padding: "0 10px", height: "50px" };
});

const StyledRow = styled.div<{}>(({ theme }) => {
  return {};
});
