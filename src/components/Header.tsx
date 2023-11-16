'use client';

import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const goHome = () => router.push('/');

  return (
    <nav>
      <Stack direction="row" alignItems="flex-end" px={4} pt={1} pb={2}>
        <Box
          sx={{
            fontSize: '2rem',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            '&:active': {
              transform: 'scale(0.98)',
            },
          }}
          onClick={goHome}
        >
          🏫
        </Box>
        <Box sx={{ fontSize: '1.25rem' }}>Smart School</Box>
      </Stack>
    </nav>
  );
};

export default Header;
