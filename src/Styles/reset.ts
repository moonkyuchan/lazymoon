import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
${reset}

@font-face {
  font-family: 'Bold';
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Bold.ttf")}) format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'SemiBold';
  src: url(${require("@/Asset/Font/IBMPlexSansKR-SemiBold.ttf")}) format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'Medium';
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Medium.ttf")}) format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'Regular';
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Regular.ttf")}) format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'Light';
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Light.ttf")}) format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'ExtraLight';
  src: url(${require("@/Asset/Font/IBMPlexSansKR-ExtraLight.ttf")}) format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'Thin';
  src: url(${require("@/Asset/Font/IBMPlexSansKR-Thin.ttf")}) format('truetype');
  font-style: normal;
}

@font-face {
  font-family: 'Edensor';
  src: url(${require("@/Asset/Font/Edensor-FREE.otf")}) format('opentype');
  font-style: normal;
}




* {
  box-sizing: border-box;
}

body{
  font-family:"Regular";
  position: "relative";
}

`;

export default ResetStyles;
