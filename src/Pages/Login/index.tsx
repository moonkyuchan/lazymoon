import { ReactElement, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { InitialAuth } from "@/Firebase";

import DeviceContext from "@/Context/DeviceContext";

import { ContentLayout } from "@root/src/Layout";

function Login(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const ButtonArr: {
    key: number;
    title: string;
    login?: () => Promise<void>;
  }[] = [
    {
      key: 1,
      title: "GOOGLE Login",
      login: handleGoogleLogin,
    },
    {
      key: 2,
      title: "NAVER Login",
      // login: handleGoogleLogin(e),
    },
    {
      key: 3,
      title: "KAKAO Login",
      // login: handleGoogleLogin(e),
    },
  ];

  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(InitialAuth, provider)
        .then(async (result) => {
          const token = await result.user.getIdToken();
          if (token) {
            localStorage.setItem("token", token);
          }
        })
        .then(() => history.push("/"));
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(InitialAuth, email, password).then(
        (user) => {
          if (user) {
            history.push("/");
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContentLayout
      style={{
        height: isMobile ? "100vh" : "100vh",
        padding: isMobile ? "0" : "50px 70px",
      }}
    >
      <StyledForm $mobile={isMobile} onSubmit={handleSubmit}>
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
        {ButtonArr.map((data) => {
          return (
            <StyledWideButton key={data.key} onClick={data.login}>
              {data.title}
            </StyledWideButton>
          );
        })}
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
    margin: "100px 0 40px 0",
  };
});

const StyledForm = styled.form<{ $mobile: boolean }>(({ theme, $mobile }) => {
  return {
    maxWidth: $mobile ? "330px" : "500px",
    margin: "0 auto",
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
    padding: "0 20px",
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
