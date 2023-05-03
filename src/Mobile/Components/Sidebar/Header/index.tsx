import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

import { values } from "@root/src/Configs";

function Header({ handleSidebarClose }): ReactElement {
  const [active, setActive] = useState<number>(1);

  return (
    <StyledHeader>
      <CloseOutlined
        style={{ fontSize: "20px", padding: "0 5px" }}
        onClick={handleSidebarClose}
      />
      <StyledMenu>
        {values.pages.map((page) => (
          <StyledItem
            key={page.key}
            onClick={() => setActive(page.key)}
            active={active === page.key}
          >
            {page.title}
          </StyledItem>
        ))}
      </StyledMenu>
    </StyledHeader>
  );
}

const StyledHeader = styled.header(({ theme }) => {
  return {
    width: "inherit",
    height: "50px",
    background: theme.grey1,
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
  };
});

const StyledMenu = styled.section(({}) => {
  return {
    display: "flex",
    flex: 0.95,
    justifyContent: "space-around",
  };
});

const StyledItem = styled.div<{ active: boolean }>(({ theme, active }) => {
  return {
    fontSize: theme.fontSizeLg,
    borderBottom: `2px solid ${active ? "black" : "transparent"}`,
  };
});

export default Header;
