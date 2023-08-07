import { ReactElement, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { InitialAuth } from "@root/src/Firebase";
import DeviceContext from "@/Context/DeviceContext";

import { ContentLayout } from "@root/src/Layout";

import { values } from "./Config";
import { UserType } from "@root/src/Configs/types";

function Join(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;
  const history = useHistory();

  const [check, setCheck] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserType>({
    email: "",
    password: "",
    repassword: "",
    name: "",
    phone: 0,
  });

  //validation은 MVP 이후에 진행하자
  const handleLogin = (e) => {
    const {
      target: { value, name },
    } = e;
    switch (name) {
      // case "password":
      //   if (name === "password" && value === userData.repassword) {
      //     setUserData((prev) => ({
      //       ...prev,
      //       [name]: value,
      //     }));
      //     setCheck(true);
      //   } else {
      //     setCheck(false);
      //   }
      //   break;

      default:
        setUserData((prev) => ({
          ...prev,
          [name]: value,
        }));
    }
  };
  //굳이 여기서 비동기 처리를 할 필요가 있나?
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        InitialAuth,
        userData.email,
        userData.password
      ).then((userCredential) => {
        if (userCredential) {
          history.push("/login");
        }
      });
    } catch (error) {
      console.log("ERROR M :", error);
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
        {values.inputArr.map((input) => {
          return (
            <StyledInputWrap $mobile={isMobile} key={input.key}>
              <StyledInputTitle>{input.title}</StyledInputTitle>
              <StyledInput
                $mobile={isMobile}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                onChange={handleLogin}
              />
            </StyledInputWrap>
          );
        })}
        <StyledButtonWrap>
          <StyledButton onClick={() => history.push("/")}>Cancel</StyledButton>
          <StyledButton type="submit">Join</StyledButton>
        </StyledButtonWrap>
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
    maxWidth: $mobile ? "330px" : "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
});

const StyledInputWrap = styled.div<{ $mobile: boolean }>(({ $mobile }) => {
  return {
    width: "100%",
    display: $mobile ? "" : "flex",
    alignItems: "center",
  };
});

const StyledInputTitle = styled.div(({ theme }) => {
  return {
    flex: "1 1 50px",
    fontFamily: theme.fontFamilySb,
  };
});

const StyledInput = styled.input<{ $mobile: boolean }>(({ theme, $mobile }) => {
  return {
    width: $mobile ? "100%" : "",
    flex: "1 1 auto",
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

const StyledButton = styled.button(({ theme }) => {
  return {
    fontSize: theme.fontSizeLg,
    width: "155px",
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

export default Join;
