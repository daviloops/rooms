'use client';

import { useRouter } from 'next/navigation';

import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Skeleton from '@mui/joy/Skeleton';

import type { Course } from "@/types";

const Courses = ({ loading, data }: { loading: boolean, data: Array<Course> }) => {
  const router = useRouter();

  const goProfile = (id: number) => router.push(`/course/${id}`);

  return (
    <Grid container spacing={3} justifyContent="center">
      {(loading ? [...Array(6)] : data)?.map((item: Course, index: number) => (
        <Grid key={loading ? index : item.id}>
          <Box
            onClick={!loading ? () => goProfile(item.id) : undefined}
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
                  color: 'text.primary',
                }
              },
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
          >
            <Typography fontSize="2rem" sx={{ wordBreak: 'break-all' }}>
              <Skeleton loading={loading}>
                {loading ? '101' : item.classroom}
              </Skeleton>
            </Typography>
            <Typography fontSize="1.5rem" sx={{ wordBreak: 'break-all' }}>
              <Skeleton loading={loading}>
                {loading ? 'Heisenberg' : item.name}
              </Skeleton>
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;
