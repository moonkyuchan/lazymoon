import { ReactElement, useState } from "react";
import styled from "styled-components";

import IconWrap from "./IconWrap";
import HeaderDetail from "./Detail";
import { values } from "./Config";

function Header(): ReactElement {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <StyledNav showDetail={showDetail}>
      <StyledMenu>
        {values.navMenu.map((data) => {
          return (
            <StyledMenuItem
              key={data.key}
              onMouseEnter={() => setShowDetail(true)}
              onMouseLeave={() => setShowDetail(false)}
            >
              {data.title}
            </StyledMenuItem>
          );
        })}
        <IconWrap />
      </StyledMenu>
      <HeaderDetail showDetail={showDetail} />
    </StyledNav>
  );
}

const StyledNav = styled.nav<{ showDetail: boolean }>(
  ({ theme, showDetail }) => {
    return {
      position: "relative",
      height: "45px",
      background: showDetail ? theme.white : theme.grey1,
      transition: "background 0.2s",
      fontFamily: theme.fontFamilyT,
    };
  }
);

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
      fontFamily: theme.fontFamilySb,
    },
  };
});

const StyledMenuItem = styled.span(() => {
  return {
    padding: "5px",
    cursor: "pointer",
  };
});

export default Header;
