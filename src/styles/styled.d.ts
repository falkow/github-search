import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      black: string;
      white: string;
      cardColor: string;
      formColor: string;
      inputColor: string;
      inputColorActive: string;
      linkColor: string;
      backgroundColor: string;
      fontColor: string;
      borderColor: string;
    };
    font: {
      family: {
        primary: string;
        secondary: string;
      };
      weigth: {
        normal: number;
        semiBold: number;
      };
      size: {
        small: string;
        normal: string;
      };
    };
    border: string;
  }
}
