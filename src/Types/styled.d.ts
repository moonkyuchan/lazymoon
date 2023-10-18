
  import 'styled-components';
  
  declare module 'styled-components' {
    export interface DefaultTheme {
  fontSizeXxs: string;
  fontSizeXs: string;
  fontSizeSm: string;
  fontSizeBase: string;
  fontSizeLg: string;
  fontSizeXl: string;
  fontSizeXxl: string;
  fontFamilyB: string;
  fontFamilySb: string;
  fontFamilyM: string;
  fontFamilyL: string;
  fontFamilyEl: string;
  fontFamilyT: string;
  fontFamilyEd: string;
  white: string;
  black: string;
  black2: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  flex: Flex;
}

interface Flex {
  display: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
}

  }
