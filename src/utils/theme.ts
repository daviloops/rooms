'use client';

import { extendTheme, Theme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          500: '#ec4899',
        },
      },
    },
  },
  components: {
    // The component identifier always start with `Joy${ComponentName}`.
    JoyFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          // theme.vars.* return the CSS variables.
          // fontSize: theme.vars.fontSize.lg, // 'var(--joy-fontSize-lg)'
          color: '#FFF', // 'var(--joy-fontSize-lg)'
        }),
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          color: '#FFF',
        },
      }
    },
    JoyCircularProgress: {
      styleOverrides: {
        progress: ({ theme }) => ({
          stroke: theme.palette.neutral[500],
        }),
      },
    },
    JoyButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: '#FFF',
          borderColor: '#FFF',
          backgroundColor: 'inherit',

          '&:hover': {
            color: theme.palette.text.primary,
            backgroundColor: '#FFF',
          },
          '&:active': {
            transform: 'scale(0.98)',
          }
        }),
      },
    },
  },
});

export default theme;
