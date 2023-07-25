import { CSSProperties, ReactElement } from "react";
import styeld from "styled-components";

function Grid({ children }): ReactElement {
  return <StyledSection>{children}</StyledSection>;
}

const StyledSection = styeld.section(({}) => {
  return {
    display: "grid",
    alignItems: "start",
    gridTemplateColumns: `repeat(${3}, 1fr)`,
    placeItems: "start center",
    gap: "25px 0px",
    margin: "100px 0",
  };
});

export default Grid;
