import { ReactElement, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface ICenterLayoutProps {
  children?: ReactNode;
  style?: CSSProperties;
}

function MobileContentLayout(props: ICenterLayoutProps): ReactElement {
  return <StyledLayout style={props.style}>{props.children}</StyledLayout>;
}

export default MobileContentLayout;

const StyledLayout = styled.section(({}) => {
  return {
    position: "relative",
    minWidth: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };
});
