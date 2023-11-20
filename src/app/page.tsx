'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { enqueueSnackbar } from 'notistack';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import AddButton from '@/components/AddButton';
import Courses from '@/app/Courses';
import { get } from '@/utils/fetcher';

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/course', get);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Could not get courses', { variant: 'error' });
    }
  }, [error]);

  const goCreateCourse = () => router.push('/course/create');

  return (
    <Stack direction="column" gap={4} display="flex" justifyContent="center">
      <Typography component="h1" textAlign="center" fontSize="1.5rem" fontWeight="600">Courses</Typography>
      <Box textAlign="end">
        <AddButton onClick={goCreateCourse} />
      </Box>
      <Courses loading={isLoading} data={data} /> 
    </Stack>
  );
}

