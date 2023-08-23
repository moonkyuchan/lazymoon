import { ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { InitialDB } from "@root/src/Firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Submit(): ReactElement {
  const uploadDate = Number(moment().format("YYYYMMDDhhmmss"));
  const date = moment().format("YYYY-MM-DD");
  const selector = useSelector((state: any) => state.article);
  const history = useHistory();

  //date(string), uploadDate(number)는 sumbit버튼 누를때 생성, 전역상태에서 제외
  //추후에 sumbit 전에 validation 필요
  const handleSubmit = async () => {
    try {
      await addDoc(collection(InitialDB, "article"), {
        date,
        uploadDate,
        ...selector,
      }).then(() => history.push("/"));
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
