import "styled-components";
import darkTheme from "./dark";

declare module "styled-components" {
  type ThemeType = typeof darkTheme;

  export interface DefaultTheme extends ThemeType {}
}
