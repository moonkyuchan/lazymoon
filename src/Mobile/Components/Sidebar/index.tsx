import { ReactElement } from "react";
import styled from "styled-components";

interface SidebarProps {
  open: boolean;
  setOpen: any;
}

function Sidebar(props: SidebarProps): ReactElement {
  const { open, setOpen } = props;
  return (
    <StyledBack open={open} onClick={() => setOpen(false)}>
      Sidebar
    </StyledBack>
  );
}

const StyledBack = styled.div<{ open: boolean }>(({ open, theme }) => {
  return {
    zIndex: 5,
    background: theme.white,
    position: "fixed",
    top: 0,
    left: open ? "0" : "-320px",
    width: "100vw",
    height: "100vh",
    transition: "left 400ms ease-in-out",
  };
});

export default Sidebar;
