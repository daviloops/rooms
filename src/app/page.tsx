'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { enqueueSnackbar } from 'notistack';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Skeleton from '@mui/joy/Skeleton';

import CloseButton from '@/components/AddButton';

import fetcher from '@/utils/fetcher';
import type { Course } from '@/types';

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/course', fetcher);
  const router = useRouter();

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Could not get courses', { variant: 'error' });
    }
  }, [error]);

  const goCreateCourse = () => router.push('/course/create');
  const goProfile = (id: number) => router.push(`/course/${id}`);

  return (
    <Stack direction="column" gap={4} display="flex" justifyContent="center">
      <Box textAlign="end">
        <CloseButton onClick={goCreateCourse} />
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {(isLoading ? [...Array(8)] : data)?.map((item: Course, index: number) => (
          <Grid key={isLoading ? index : item.id}>
            <Box
              onClick={!isLoading ? () => goProfile(item.id) : undefined}
              sx={{
                height: '100%',
                width: '17rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '2px solid white',
                borderRadius: '1.25rem',
                textAlign: 'center',
                padding: '1rem',
                transition: 'ease-in background-color transform color 0.2s',

                '&:hover': {
                  backgroundColor: '#FFF',

                  '& p': {
                    color: '#000 !important',
                  }
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
              }}
            >
              <Typography fontSize="2rem" sx={{ wordBreak: 'break-all' }}>
                <Skeleton loading={isLoading}>
                  {isLoading ? '101' : <>{item.classroom}</>}
                </Skeleton>
              </Typography>
              <Typography fontSize="1.5rem" sx={{ wordBreak: 'break-all' }}>
                <Skeleton loading={isLoading}>
                  {isLoading ? 'Heisenberg' : <>{item.name}</>}
                </Skeleton>
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

