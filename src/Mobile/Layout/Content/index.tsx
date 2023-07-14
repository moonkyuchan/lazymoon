import { ReactElement, ReactNode } from "react";
import styled, { CSSProperties, createGlobalStyle } from "styled-components";

interface ICenterLayoutProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const BodyStyles = createGlobalStyle`
	body {
		overflow-x: hidden;
		overflow-y: auto;
    -ms-overflow-style:none;

		&::-webkit-scrollbar {
      max-width: 0px;
			max-height: 0px;
			display: none;
		}
    
		&::-webkit-scrollbar-thumb {
      background-color: transparent;
		}
  }
`;

function MobileContentLayout(props: ICenterLayoutProps): ReactElement {
  return (
    <>
      <BodyStyles />
      <StyledLayout style={props.style}>{props.children}</StyledLayout>
    </>
  );
}

export default MobileContentLayout;

const StyledLayout = styled.section(({}) => {
  return {
    position: "relative",
    minWidth: "360px",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };
});
