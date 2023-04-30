import { ReactElement, useState, startTransition } from "react";
import styled from "styled-components";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import Sidebar from "@/Mobile/Components/Sidebar";

export default function MobileHeader(): ReactElement {
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  console.log("rendering.1");

  const handle = () => {
    startTransition(() => {
      setOpenMenu(!openMenu);
    });
  };

  return (
    <>
      <StyledHeader>
        <StyledRow>
          <StyledLeft>
            <StyledMenu onClick={() => setOpenMenu((satte) => !satte)} />
            <StyledTitle onClick={() => history.push("/dashboard")}>
              LAZYMOON
            </StyledTitle>
          </StyledLeft>
          <StyledRight>
            <StyledSearch onClick={handle} />
          </StyledRight>
        </StyledRow>
      </StyledHeader>
      {openMenu && <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </>
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
