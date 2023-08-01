import { ReactElement, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import DeviceContext from "@/Context/DeviceContext";

// import Content from "@/Mobile/Layout/Content";
import { ContentLayout } from "@root/src/Layout";
// import { LeftOutlined } from "@ant-design/icons";

function Login(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <ContentLayout
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: isMobile ? "0" : "50px 70px",
      }}
    >
      {/* <StyledHeader>
        <LeftOutlined
          style={{ fontSize: "20px", paddingRight: "10px" }}
          onClick={() => history.goBack()}
        />
        <StyledTitle>Login</StyledTitle>
      </StyledHeader> */}
      <StyledForm $mobile={isMobile}>
        <StyledTitle>LAZYMOON</StyledTitle>
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
        <StyledWideButton onClick={() => console.log("GOOGLE")}>
          GOOGLE Login
        </StyledWideButton>
        <StyledWideButton onClick={() => console.log("NAVER")}>
          NAVER Login
        </StyledWideButton>
        <StyledWideButton onClick={() => console.log("KAKAO")}>
          KAKAO Login
        </StyledWideButton>
        <StyledButtonWrap>
          <StyledButton onClick={() => history.push("/")}>Cancel</StyledButton>
          <StyledButton type="submit">Login</StyledButton>
        </StyledButtonWrap>
        <StyledWideButton onClick={() => history.push("/join")}>
          Join
        </StyledWideButton>
      </StyledForm>
    </ContentLayout>
  );
}

const StyledTitle = styled.div(({ theme }) => {
  return {
    fontFamily: theme.fontFamilySb,
    fontSize: theme.fontSizeXxl,
    marginBottom: "40px",
  };
});

const StyledForm = styled.form<{ $mobile: boolean }>(({ theme, $mobile }) => {
  return {
    width: $mobile ? "" : "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",
  };
});

const SharedButtonStyle = styled.button(({ theme }) => {
  return {
    fontSize: theme.fontSizeLg,
    border: `none`,
    borderRadius: "5px",
    cursor: "pointer",
    background: theme.grey1,
    height: "45px",
    [":hover"]: {
      background: theme.grey3,
      color: theme.grey1,
    },
  };
});

const StyledButton = styled(SharedButtonStyle)(({ theme }) => {
  return {
    width: "155px",
  };
});

const StyledWideButton = styled(SharedButtonStyle)(() => {
  return { marginTop: "15px", width: "100%" };
});

export default Login;
