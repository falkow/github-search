import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.font.weigth.normal};

  color:${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  /* font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%; */
}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
    }

body {
  margin: 0;
  display: flex;
  justify-content: center;
}

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* input:-internal-autofill-selected */
   input:-webkit-autofill,
  input:-webkit-autofill:focus {

    transition: background-color 600000s 0s, color 600000s 0s;
  }

  /* Firefox */
  /* & input[type='number'] {
    -moz-appearance: textfield;
  } */

`;
