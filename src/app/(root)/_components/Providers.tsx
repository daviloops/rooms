'use client';

import { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

import { CssVarsProvider } from '@mui/joy/styles';

import theme from '@/app/(root)/theme';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <CssVarsProvider theme={theme}>
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </CssVarsProvider>
  );
};

export default Providers;
