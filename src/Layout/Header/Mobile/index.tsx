import { ReactElement } from "react";
import styled from "styled-components";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

export default function MobileHeader(): ReactElement {
  return (
    <StyledHeader>
      <StyledRow>
        <StyledLeft>
          <StyledMenu onClick={() => console.log("MENU")} />
          <StyledTitle onClick={() => console.log("HOME")}>
            LAZYMOON
          </StyledTitle>
        </StyledLeft>
        <StyledRight>
          <StyledSearch onClick={() => console.log("SEARCH")} />
        </StyledRight>
      </StyledRow>
    </StyledHeader>
  );
}

const StyledHeader = styled.header(({ theme }) => {
  return {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "0 20px",
    height: "50px",
    backgroundColor: theme.white,
  };
});

const StyledRow = styled.div(() => {
  return {
    height: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

const StyledLeft = styled.div(() => {
  return {
    display: "flex",
    fontSize: "20px",
  };
});

const StyledRight = styled.div(() => {
  return {
    fontSize: "20px",
  };
});

const StyledMenu = styled(MenuOutlined)(() => {
  return {
    paddingRight: "10px",
  };
});

const StyledTitle = styled.span(() => {
  return {
    paddingLeft: "5px",
    letterSpacing: "1.3px",
  };
});

const StyledSearch = styled(SearchOutlined)(() => {
  return { padding: "0 2px" };
});
