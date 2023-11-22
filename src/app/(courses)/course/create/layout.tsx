import { ReactNode } from 'react';

import Box from "@mui/joy/Box";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box
        p={3}
        maxWidth="28rem"
        width='100%'
        sx={{
          border: '2px solid white',
          borderRadius: '1.25rem',
        }}
      > 
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
