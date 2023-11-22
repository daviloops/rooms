'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import AddButton from '@/components/AddButton';
import Courses from '@/app/(courses)/_components/Courses';

export default function Home() {
  const router = useRouter();

  const goCreateCourse = () => router.push('/course/create');

  return (
    <Stack direction="column" gap={4} display="flex" justifyContent="center">
      <Typography component="h1" textAlign="center" fontSize="1.5rem" fontWeight="600">Courses</Typography>
      <Box textAlign="end">
        <AddButton tooltipText="Create course" onClick={goCreateCourse} />
      </Box>
      <Courses /> 
    </Stack>
  );
}

