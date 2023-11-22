'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import AddButton from '@/components/AddButton';
import Courses from '@/app/Courses';
import useCourses from '@/app/Courses/useCourses';

export default function Home() {
  const { data, isLoading } = useCourses();
  const router = useRouter();

  const goCreateCourse = () => router.push('/course/create');

  return (
    <Stack direction="column" gap={4} display="flex" justifyContent="center">
      <Typography component="h1" textAlign="center" fontSize="1.5rem" fontWeight="600">Courses</Typography>
      <Box textAlign="end">
        <AddButton tooltipText="Create course" onClick={goCreateCourse} />
      </Box>
      <Courses loading={isLoading} data={data} /> 
    </Stack>
  );
}

