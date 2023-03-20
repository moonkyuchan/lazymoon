import "styled-components";
import { ColorsTypes, FontSizes } from "@/Styles/variables";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSizes: FontSizes;
  }
}
