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

const StyledLayout = styled.main(({}) => {
  return {
    width: "100vw",
    height: "auto",
    maxWidth: "1300px",
    padding: "50px 70px",
    margin: "0 auto",
  };
});
