import { ReactElement } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { selectSidebarActive } from "@root/src/Store/Slice/Sidebar";

import { values } from "@root/src/Configs";

export default function SidebarContent(): ReactElement {
  const tab = useSelector(selectSidebarActive);

  return (
    <StyledBack>
      <StyledWrap>
        {values.navs[tab].map((nav) => (
          <StyledItem key={nav.key}>{nav.name}</StyledItem>
        ))}
      </StyledWrap>
    </StyledBack>
  );
}

const StyledBack = styled.section(({}) => {
  return {
    padding: "40px 30px",
  };
});

const StyledWrap = styled.div(({}) => {
  return {
    height: "fit-content",
    borderBottom: "2px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    ["div:last-child"]: {
      marginBottom: "40px",
    },
  };
});

const StyledItem = styled.div(({}) => {
  return {
    fontWeight: 300,
    fontSize: "20px",
    marginBottom: "50px",
  };
});
