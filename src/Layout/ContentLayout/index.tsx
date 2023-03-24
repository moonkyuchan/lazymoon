import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ICenterLayoutProps {
  children?: ReactNode;
}

export default function ContentLayout(props: ICenterLayoutProps): ReactElement {
  const { children } = props;

  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.section(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    // padding: "5px 0",
  };
});
