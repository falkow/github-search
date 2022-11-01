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
      linkColor: string;
      backgroundColor: string;
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
    };
    border: string;
  }
}
