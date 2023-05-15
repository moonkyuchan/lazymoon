import { ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function SidebarFooter(): ReactElement {
  const history = useHistory();

  const handelHistory = (e) => {
    const {
      target: {
        dataset: { string },
      },
    } = e;
    history.push(`/${string}`);
  };

  return (
    <StyledBack>
      <StyledLogin>
        <StyledText data-string="login" onClick={(e) => handelHistory(e)}>
          Login
        </StyledText>
        <StyledText>/</StyledText>
        <StyledText data-string="register" onClick={(e) => handelHistory(e)}>
          Register
        </StyledText>
      </StyledLogin>
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
  return {
    width: "150px",
    display: "flex",
    ["span:first-child"]: {
      paddingLeft: 0,
    },
  };
});

const StyledText = styled.span(() => {
  return {
    fontFamily: "serif",
    padding: "0 5px",
  };
});
