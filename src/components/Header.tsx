'use client';

import { useRouter, usePathname } from "next/navigation";

import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Link from '@mui/joy/Link';

import CreateStudentModal from '@/app/CreateStudentModal/CreateStudentModal';

const Header = () => {
  const router = useRouter();
  const pathname= usePathname();

  const goHome = () => router.push('/');

  return (
    <nav>
      <Stack direction="row" alignItems="center" px={4} spacing={4}>
        <Stack direction="row" alignItems="center">
          <Box
            pt={1}
            pb={3}
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
          <Box sx={{ fontSize: '1.25rem' }}>Schoolboard</Box>
        </Stack>
        <Box sx={{ textAlign: "end", flexGrow: 1 }}>
          <Link onClick={goHome} underline={pathname === '/' ? 'always' : 'hover'}>Courses</Link>
        </Box>
        <Box>
          <CreateStudentModal />
        </Box>
      </Stack>
    </nav>
  );
};

export default Header;
