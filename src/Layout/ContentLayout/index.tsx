import { CSSProperties, ReactElement, ReactNode, useEffect } from "react";
import styled from "styled-components";

interface ICenterLayoutProps {
  children?: ReactNode;
  style?: CSSProperties;
  newStyle?: CSSProperties;
  excepted?: string;
}

export default function ContentLayout(props: ICenterLayoutProps): ReactElement {
  const exceptedList = ["/register"];

  const { children, style, excepted, newStyle } = props;

  const checkExcepted = exceptedList.includes(`${excepted}`);

  useEffect(() => {
    console.log("USEE");
  }, [excepted]);

  return (
    <StyledLayout style={style} newStyle={newStyle} excepted={checkExcepted}>
      {children}
    </StyledLayout>
  );
}

const StyledLayout = styled.main<{
  excepted: boolean;
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
