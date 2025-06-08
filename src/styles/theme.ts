import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    blue: '#646cff',
    black: '#26292A',
    white: '#ffffff',
    warning: '#F3F8D1',
    fontColor: '#ffffffde',
    cardColor: '#265D62',
    formColor: '#667E89',
    inputColor: '#26292A',
    inputColorActive: '#7B57AF',
    linkColor: '#242424',
    backgroundColor: '#AEC591',
    borderColor: '#AEC591',
    errorBg: '#ffe5e5',
    errorColor: '#b00020',
  },
  font: {
    family: {
      primary: '',
      secondary: '',
    },
    weigth: {
      normal: 400,
      semiBold: 500,
    },
    size: {
      small: '14px',
      normal: '16px',
    },
  },
  border: '8px',
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
};
