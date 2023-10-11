import { ReactElement } from "react";
import styled from "styled-components";

type ButtonType = {
  key: number;
  title: string;
  login?: () => Promise<void>;
}[];

const Button: ButtonType = [
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
  // const provider = new GoogleAuthProvider();
  // try {
  //   await signInWithPopup(InitialAuth, provider).then(async (result) => {
  //     const token = await result.user.getIdToken();
  //     if (token) {
  //       localStorage.setItem("token", token);
  //     }
  //   });
  //   // .then(() => history.push("/"));
  // } catch (error) {
  //   console.log("ERROR", error);
  // }
}

function SocialLogin(): ReactElement {
  return (
    <>
      {Button.map((data) => {
        return (
          <StyledWideButton key={data.key} onClick={data.login}>
            {data.title}
          </StyledWideButton>
        );
      })}
    </>
  );
}

const StyledWideButton = styled.button(({ theme }) => {
  return {
    fontSize: theme.fontSizeLg,
    border: `none`,
    borderRadius: "5px",
    cursor: "pointer",
    background: theme.grey2,
    height: "45px",
    [":hover"]: {
      background: theme.grey4,
      color: theme.grey1,
    },
    marginTop: "15px",
    width: "100%",
  };
});

export default SocialLogin;
