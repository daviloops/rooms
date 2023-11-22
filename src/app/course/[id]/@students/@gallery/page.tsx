'use client';

import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Skeleton from "@mui/joy/Skeleton";

import useCourse from "@/app/course/[id]/useCourse";
import type { Student } from "@/types";

const GalleryView = ({ params }: { params: { id: string }}) => {
  const { data, isLoading } = useCourse({ id: params.id });

  return (
    <Grid container spacing={3} justifyContent="center">
      {(isLoading ? [...Array(4)] : data?.students)?.map((item: Student, index: number) => (
        <Grid key={isLoading ? index : item.id}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              height: '100%',
              width: '12rem',
              padding: '0.5rem',
              borderRadius: '7rem',
              border: '2px solid white',
            }}
          >
            <Avatar />
            <Typography textColor="white">
              <Skeleton loading={isLoading}>
                {isLoading ? 'Pepe Harrison' : item.name}
              </Skeleton>
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryView;
