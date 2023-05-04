import { ReactElement } from "react";
import styled from "styled-components";

import { values } from "@root/src/Configs";

export default function SidebarContent(): ReactElement {
  return (
    <StyledBack>
      <StyledWrap>
        {values.navs[1].map((nav) => (
          <StyledItem key={nav.key}>{nav.name}</StyledItem>
        ))}
      </StyledWrap>
    </StyledBack>
  );
}

const StyledBack = styled.section(({}) => {
  return {
    width: "inherit",
    height: "inherit",
    padding: "40px 30px",
  };
});

const StyledWrap = styled.div(({}) => {
  return {
    height: "fit-content",
    borderBottom: "3px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    ["div:last-child"]: {
      marginBottom: "40px",
    },
  };
});

const StyledItem = styled.div(({ theme }) => {
  return {
    fontSize: "20px",
    marginBottom: "50px",
  };
});
