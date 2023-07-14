import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
${reset}

@font-face {
  font-family: SemiBold;
  src: url(${require("@/Asset/Font/IBMPlexSansKR-SemiBold.ttf")}) format('ttf');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: Medium;
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Medium.ttf")}) format('ttf');
  font-style: normal;
}
@font-face {
  font-family: Regular;
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Regular.ttf")}) format('ttf');
  font-style: normal;
}
@font-face {
  font-family: Light;
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Light.ttf")}) format('ttf');
  font-style: normal;
}


* {
  box-sizing: border-box;
}

body{
  font-family:"Regular";
}

`;

export default ResetStyles;
