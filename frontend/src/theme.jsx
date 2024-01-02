import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: 'linear-gradient(-45deg, #fff, #1d1680, #269cc7, #fff)',
        backgroundSize: '400% 400%',
        animation: 'gradient 10s ease infinite',
        '@keyframes gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        lineHeight: 'base',
      },
    },
  },
});

export default theme;
