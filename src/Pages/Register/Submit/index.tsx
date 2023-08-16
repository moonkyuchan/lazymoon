import { ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Submit(): ReactElement {
  const history = useHistory();

  return (
    <StyeldWrap>
      <StyledButton onClick={() => history.push("/")}>취소</StyledButton>
      <StyledButton>등록</StyledButton>
    </StyeldWrap>
  );
}

const StyeldWrap = styled.div(() => {
  return {
    marginTop: "50px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };
});

const StyledButton = styled.button(({ theme }) => {
  return {
    width: "100px",
    height: "50px",
    border: "none",
    cursor: "pointer",
    marginLeft: "40px",
    borderRadius: "5px",
    color: theme.grey2,
    fontFamily: theme.fontFamilyEd,
    fontSize: theme.fontSizeLg,
    fontWeight: 500,
    backgroundColor: theme.grey1,
    [":hover"]: {
      backgroundColor: theme.grey3,
      color: theme.white,
    },
  };
});
