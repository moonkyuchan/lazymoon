import { ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { InitialDB } from "@root/src/Firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Submit(): ReactElement {
  const selector = useSelector((state: any) => state.article);
  const history = useHistory();

  const handleSubmit = async () => {
    console.log("???");
    try {
      const docRef = await addDoc(collection(InitialDB, "article"), {
        ...selector,
      }).then(() => history.push("/"));
      console.log("Document written with ID: ", docRef);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyeldWrap>
      <StyledButton onClick={() => history.push("/")}>취소</StyledButton>
      <StyledButton onClick={handleSubmit}>등록</StyledButton>
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
