import { ReactNode } from 'react';

import { Box } from "@mui/joy";

import Header from '@/components/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        p={4}
        width="100%"
        height="calc(100% - 66.4px)"
      >
        {children}
      </Box>
    </>
  )
};

export default Layout;
