'use client';

import { useRouter } from 'next/navigation';

import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Skeleton from '@mui/joy/Skeleton';

import useCourses from '@/app/(courses)/_hooks/useCourses';
import type { Course } from "@/types";

const Courses = () => {
  const { data, isLoading } = useCourses();
  const router = useRouter();

  const goProfile = (id: number) => router.push(`/course/${id}`);

  return (
    <Grid container gap={3} justifyContent="center">
      {(isLoading ? [...Array(10)] : data)?.map((item: Course, index: number) => (
        <Grid key={isLoading ? index : item.id}>
          <Box
            onClick={!isLoading ? () => goProfile(item.id) : undefined}
            sx={{
              height: '100%',
              width: '15rem',
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
                  color: 'text.primary',
                }
              },
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
          >
            <Typography fontSize="1.25rem">
              <Skeleton loading={isLoading}>
                {isLoading ? 'Calculus III' : item.name}
              </Skeleton>
            </Typography>
            <Typography fontSize="1rem">
              <Skeleton loading={isLoading}>
                {isLoading ? 'Heisenberg' : item.teacher}
              </Skeleton>
            </Typography>
            <Typography fontSize="1rem">
              <Skeleton loading={isLoading}>
                {isLoading ? '101' : item.classroom}
              </Skeleton>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;
