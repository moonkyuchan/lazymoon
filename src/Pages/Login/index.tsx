import { ReactElement, useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import DeviceContext from "@/Context/DeviceContext";

import { ContentLayout } from "@root/src/Layout";

import SocialLogin from "./SocialLogin";
import { values } from "./Config";

function Login(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;
  const history = useHistory();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   await signInWithEmailAndPassword(InitialAuth, email, password).then(
    //     (user) => {
    //       if (user) {
    //         history.push("/");
    //       }
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleInput = (e) => {
    const {
      target: { name, value },
    } = e;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        {values.inputArr.map((ele) => {
          return (
            <StyledInput
              key={ele.key}
              type={ele.type}
              placeholder={ele.placeholder}
              name={ele.name}
              onChange={(e) => handleInput(e)}
            />
          );
        })}
        <SocialLogin />
        <StyledButtonWrap>
          <StyledButton onClick={() => history.push("/")} $mobile={isMobile}>
            Cancel
          </StyledButton>
          <StyledButton type="submit" $mobile={isMobile}>
            Login
          </StyledButton>
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
    margin: "0 0 40px 0",
  };
});

const StyledForm = styled.form<{ $mobile: boolean }>(({ theme, $mobile }) => {
  return {
    maxWidth: $mobile ? "300px" : "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "150px",
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
    background: theme.grey2,
    height: "45px",
    [":hover"]: {
      background: theme.grey4,
      color: theme.grey1,
    },
  };
});

const StyledButton = styled(SharedButtonStyle)<{ $mobile: boolean }>(
  ({ $mobile }) => {
    return {
      width: $mobile ? "120px" : "155px",
    };
  }
);

export const StyledWideButton = styled(SharedButtonStyle)(() => {
  return { marginTop: "15px", width: "100%" };
});

export default Login;
