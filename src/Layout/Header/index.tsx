import { ReactElement } from "react";
import styled from "styled-components";

export default function WebHeader(): ReactElement {
  return (
    <StyledHeader>
      <StyledRow>
        <StyledTitle>햄버거</StyledTitle>
        <StyledTitle2>함바가</StyledTitle2>
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

const StyledTitle = styled.span(({ theme }) => {
  return {
    fontSize: "40px",
    fontFamily: theme.fontFamilyL,
  };
});

const StyledTitle2 = styled.span(({ theme }) => {
  return {
    fontSize: "50px",
    fontFamily: theme.fontFamilySb,
  };
});
