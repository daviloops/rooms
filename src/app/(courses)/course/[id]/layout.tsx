import { ReactNode } from "react";

import Stack from "@mui/joy/Stack";

const Layout = ({ children, students }: { children: ReactNode, students: ReactNode }) => {
  return (
    <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      {children}
      {students}
    </Stack>
  );
};

export default Layout;
