import { ReactElement, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Content from "@/Mobile/Layout/Content";
import { LeftOutlined } from "@ant-design/icons";

function Login(): ReactElement {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Content>
      <StyledHeader>
        <LeftOutlined
          style={{ fontSize: "20px", paddingRight: "10px" }}
          onClick={() => history.goBack()}
        />
        <StyledTitle>Login</StyledTitle>
      </StyledHeader>
      <StyledContent>
        <StyledForm>
          <StyledInput
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButtonWrap>
            <StyledButton onClick={() => history.goBack()}>Cancel</StyledButton>
            <StyledButton type="submit">Login</StyledButton>
          </StyledButtonWrap>
          <StyledJoin onClick={() => history.push("/join")}>Join</StyledJoin>
        </StyledForm>
      </StyledContent>
    </Content>
  );
}

const StyledHeader = styled.header(({ theme }) => {
  return {
    padding: "0 20px",
    height: "50px",
    backgroundColor: theme.white,
    display: "flex",
    alignItems: "center",
  };
});

const StyledContent = styled.div(({}) => {
  return {
    padding: "10px 20px",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };
});

const StyledTitle = styled.div(({}) => {
  return {
    fontSize: "20px",
    // flexGrow: 1,
    display: "inline-block",
  };
});

const StyledForm = styled.form(({}) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const StyledInput = styled.input(({ theme }) => {
  return {
    width: "100%",
    height: "50px",
    margin: "15px 0",
    padding: "0 10px",
    borderRadius: "5px",
    color: theme.black,
    fontSize: theme.fontSizeLg,
  };
});

const StyledButtonWrap = styled.div(() => {
  return {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
  };
});

const StyledButton = styled.button(({ theme }) => {
  return {
    width: "155px",
    height: "45px",
    color: theme.black,
    fontSize: theme.fontSizeLg,
    fontFamily: "serif",
    border: "none",
    borderRadius: "5px",
  };
});

const StyledJoin = styled(StyledButton)(() => {
  return { marginTop: "10px", width: "100%" };
});

export default Login;
