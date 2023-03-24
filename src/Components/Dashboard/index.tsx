import { ReactElement } from "react";
import ContentLayout from "@root/src/Layout/ContentLayout";
import styeld from "styled-components";
import tower from "@/Asset/Images/french.jpeg";
import bridge from "@/Asset/Images/bridge.jpeg";
import home from "@/Asset/Images/home.jpeg";

export default function Dashboard(): ReactElement {
  return (
    <ContentLayout>
      <StyledItems2>
        <StyledTitle>LAYY MOON</StyledTitle>
      </StyledItems2>
      <StyledItems>1</StyledItems>
      <StyledItems3>3</StyledItems3>
    </ContentLayout>
  );
}

const StyledTitle = styeld.span(({ theme }) => {
  return {
    position: "absolute",
    fontSize: "40px",
    color: theme.white,
  };
});

const StyledItems = styeld.section(() => {
  return {
    width: "auto",
    height: "calc(100vh - 50px)",
    background: `url(${tower})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
});

const StyledItems2 = styeld.section(({ theme }) => {
  return {
    width: "auto",
    height: "calc(100vh - 50px)",
    background: `url(${bridge})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "40% 60%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const StyledItems3 = styeld.section(() => {
  return {
    minWidth: "360px",
    height: "calc(100vh - 50px)",
    background: `url(${home})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left",
  };
});
