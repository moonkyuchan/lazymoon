import { ReactElement, useEffect, useState } from "react";
import { ContentLayout } from "@root/src/Layout";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import { InitialDB } from "@root/src/Firebase";
import { getDoc, doc } from "firebase/firestore";

import { FrontType } from "@root/src/Configs";
import styled from "styled-components";

export default function Viewer(): ReactElement {
  const params: any = useParams();
  const articleRef = doc(InitialDB, `article`, `${params.id}`);
  const [data, setData] = useState<FrontType.ArticleType>();

  useEffect(() => {
    const getDate = async () => {
      try {
        if (params) {
          const res = await getDoc(articleRef);
          if (res.exists()) {
            const data: any = res.data();
            setData(data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, []);

  //토큰 탈취 처럼 취약점을 노려서 javascript와 HTML로 악의적 코드를 웹 브라우저에 심어,
  //사용자 접속시 그 악성코드가 실행되는 것을 크로스 사이드 스크립트 라고 합니다.
  //이 문제에 대한 방어법중 하나는 dompurify 입니다.
  const sanitizedHtml = DOMPurify.sanitize(data?.article);

  return (
    <>
      <StyeldTitle>{data?.title}</StyeldTitle>
      <StyledContents dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </>
  );
}

const StyeldTitle = styled.div(({ theme }) => {
  return {
    fontSize: "50px",
    fontFamily: theme.fontFamilyEd,
    margin: "40px 0",
  };
});

const StyledContents = styled.div(({ theme }) => {
  return {
    minHeight: "500px",
    padding: "20px 0",
    // fontSize: theme.fontSizeXl,
  };
});
