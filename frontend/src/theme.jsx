import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: 'linear-gradient(-45deg, #38ac89, #2c876b, #143d31)',
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
