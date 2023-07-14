import { CSSProperties, ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ICenterLayoutProps {
  children?: ReactNode;
  style?: CSSProperties;
}

export default function ContentLayout(props: ICenterLayoutProps): ReactElement {
  const { children, style } = props;

  return <StyledLayout style={style}>{children}</StyledLayout>;
}

const StyledLayout = styled.section(({}) => {
  return {
    width: "100vw",
    height: "100vh",
    maxWidth: "1200px",
    padding: "50px 70px",
    margin: "0 auto",
  };
});
