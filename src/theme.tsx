import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/cabin';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: `'Cabin', sans-serif`,
    heading: `'Cabin', sans-serif`,
  },
  colors: {
    main: {
      100: '#765cde',
      200: '#3b3270',
      300: '#252944',
      400: '#1c1f36',
      500: '#141627',
    },
    text: {
      400: '#646887',
      500: '#d0d3e7',
    },
    customRed: '#e5549a',
    gradient: {
      100: '#a117bf',
      200: '#3e1bbb',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'main.500',
        color: 'text.500',
      },
      button: {
        color: 'text.500',
      },
      h1: {
        fontSize: '1.5rem',
      },
      h3: {
        color: 'white',
        fontSize: '1rem',
      },
    },
  },
});

export default theme;
