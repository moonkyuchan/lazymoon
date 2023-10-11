import { ReactElement, useEffect, useState } from "react";
import { Slider, GridFilter } from "@/Components/Common";
import { PlusCircleOutlined } from "@ant-design/icons";

import { InitialDB } from "@root/src/Firebase";
import { collection, getDocs } from "firebase/firestore";

import { FrontType, values } from "@/Configs";

import styled from "styled-components";

export default function Dashboard(): ReactElement {
  const [articles, setArticles] = useState<FrontType.CardType[]>([]);
  const articleRef = collection(InitialDB, "article");

  useEffect(() => {
    async function getData() {
      try {
        const snapShot = await getDocs(articleRef);
        const fetchedArticles = snapShot.docs.map((doc: any) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        setArticles(fetchedArticles);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  //StyledRegisterButton은 이후에 회원 유형에 따라 조건부 렌더링 필요
  return (
    <StyledWrap>
      <Slider values={values} title={""} />
      {/* <StyledRegisterButton onClick={() => history.push("/register")} /> */}
      <GridFilter data={articles} filter={values.category} />
    </StyledWrap>
  );
}

const StyledWrap = styled.div(({}) => {
  return {
    // position: "relative",
  };
});

const StyledRegisterButton = styled(PlusCircleOutlined)(({ theme }) => {
  return {
    position: "absolute",
    fontSize: "35px",
    cursor: "pointer",
    right: "80px",
    top: "390px",

    [":hover"]: {
      opacity: 0.6,
      transition: "transform 0.2s ease-in",
      transform: "scale(1.2, 1.2)",
    },
  };
});
