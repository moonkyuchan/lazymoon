import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
${reset}

/* @font-face {
  font-family: Light;
  src: url(${require("@/Asset/Font/AnyConv.com__GothicA1-Light.woff")}) format('woff2');
}

@font-face {
  font-family: Light;
  src: url(${require("@/Asset/Font/AnyConv.com__GothicA1-Light.woff")}) format('woff2');
}

@font-face {
  font-family: Light;
  src: url(${require("@/Asset/Font/AnyConv.com__GothicA1-Light.woff")}) format('woff2');
} */

* {
  box-sizing: border-box;
}

body{
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
/* font-family:Light ;
font-weight: 700 ; */
}

`;

export default ResetStyles;
