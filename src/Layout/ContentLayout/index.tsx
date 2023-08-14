import { CSSProperties, ReactElement, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface ICenterLayoutProps {
  children?: ReactNode;
  style?: CSSProperties;
  newStyle?: CSSProperties;
}

export default function ContentLayout(props: ICenterLayoutProps): ReactElement {
  const history = useHistory();

  //ContentLayout 제외 페이지 리스트
  const exceptedList = ["/register"];

  const { children, style, newStyle } = props;

  const checkExcepted = exceptedList.includes(`${history.location.pathname}`);

  //문제는 필요한 곳에 newStyle을 넣어줘도 결국 ContentLayout이 두번 불려오네 리팩토링 필요!
  return checkExcepted ? (
    <StyledLayout style={style} newStyle={newStyle} excepted={checkExcepted}>
      {children}
    </StyledLayout>
  ) : (
    <StyledLayout style={style}>{children}</StyledLayout>
  );
}

const StyledLayout = styled.main<{
  excepted?: boolean;
  newStyle?: CSSProperties;
}>(({ excepted, newStyle }) => {
  return excepted
    ? { ...newStyle }
    : {
        width: "100vw",
        height: "auto",
        maxWidth: "1300px",
        padding: "50px 70px",
        margin: "0 auto",
      };
});
