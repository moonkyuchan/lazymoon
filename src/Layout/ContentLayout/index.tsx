import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ICenterLayoutProps {
  children?: ReactNode;
  onWheel?: any;
}

export default function ContentLayout(props: ICenterLayoutProps): ReactElement {
  const { children, onWheel } = props;

  return <StyledLayout onWheel={onWheel}>{children}</StyledLayout>;
}

const StyledLayout = styled.section`
  display: "flex";
  flex-direction: "column";
`;
