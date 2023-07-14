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

const StyledLayout = styled.section`
  display: "flex";
  flex-direction: "column";
`;
