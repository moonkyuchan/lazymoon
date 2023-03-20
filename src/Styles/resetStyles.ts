import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
${reset},

* {
  box-sizing: border-box;
}

body{
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

`;

export default ResetStyles;
