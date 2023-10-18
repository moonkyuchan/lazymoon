import { ReactElement } from "react";
import styled from "styled-components";

import { values } from "./Config";

function Header(): ReactElement {
  return (
    <StyledNav>
      <StyledMenu>
        {values.NavMenu.map((data) => {
          return (
            <StyledMenuItem
              style={{ display: "flex", gap: "10px" }}
              key={data.key}
            >
              {data.title}
            </StyledMenuItem>
          );
        })}
        <div>
          <span>하하</span>
          <span>하하</span>
          <span>하하</span>
        </div>
      </StyledMenu>
    </StyledNav>
  );
}

const StyledNav = styled.nav(({ theme }) => {
  return {
    height: "45px",
    background: theme.grey1,
    fontFamily: theme.fontFamilyEl,
  };
});

const StyledMenu = styled.div(({ theme }) => {
  return {
    padding: "0 20px",
    height: "inherit",
    margin: "0 auto",
    maxWidth: "1024px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ["> span:first-child"]: {
      fontFamily: theme.fontFamilyB,
    },
  };
});

const StyledMenuItem = styled.span(() => {
  return {
    cursor: "pointer",
  };
});

export default Header;
