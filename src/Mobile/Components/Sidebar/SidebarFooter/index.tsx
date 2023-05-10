import { ReactElement } from "react";
import styled from "styled-components";

function SidebarFooter(): ReactElement {
  return (
    <StyledBack>
      <StyledLogin>Login / Register</StyledLogin>
    </StyledBack>
  );
}

export default SidebarFooter;

const StyledBack = styled.footer(({}) => {
  return {
    padding: "0 30px",
  };
});

const StyledLogin = styled.div(() => {
  return { fontFamily: "serif" };
});
