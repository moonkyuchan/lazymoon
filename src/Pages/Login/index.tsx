import { ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Content from "@/Mobile/Layout/Content";
import { LeftOutlined } from "@ant-design/icons";

function Login(): ReactElement {
  const history = useHistory();

  return (
    <Content>
      <StyledHeader>
        {/* <StyledRow> */}
        <LeftOutlined
          style={{ fontSize: "20px", paddingRight: "10px" }}
          onClick={() => history.goBack()}
        />
        <StyledTitle>Login</StyledTitle>
        {/* </StyledRow> */}
      </StyledHeader>
    </Content>
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

    display: "flex",
    flexGrow: 0,
    flexBasis: "auto",
    alignItems: "center",
  };
});

const StyledRow = styled.div(() => {
  return {
    height: "inherit",
    display: "flex",
    alignItems: "center",
    // flex: "1 1 100px",
    flexGrow: 1,
  };
});

const StyledTitle = styled.div(() => {
  return {
    fontSize: "20px",
  };
});

export default Login;
