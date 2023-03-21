import { ReactElement } from "react";
import styled from "styled-components";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

export default function MobileHeader(): ReactElement {
  return (
    <StyledHeader>
      <StyledRow>
        <MenuOutlined style={{ fontSize: "20px" }} />
        <div>LAZY MOON</div>
        <SearchOutlined style={{ fontSize: "20px" }} />
      </StyledRow>
    </StyledHeader>
  );
}

const StyledHeader = styled.header(({ theme }) => {
  return { backgroundColor: "Red", padding: "0 20px", height: "50px" };
});

const StyledRow = styled.div<{}>(({ theme }) => {
  return {
    height: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
});
