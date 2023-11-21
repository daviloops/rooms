'use client';

import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import useSWR from "swr";

import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Skeleton from "@mui/joy/Skeleton";
import { styled } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";

import { getById } from "@/utils/fetcher";

import Students from "@/app/course/[id]/Students/Students";

export default function CourseDetails({ params }: { params: { id: string }}) {
  const { data, isLoading, error } = useSWR(['/api/course', params.id], getById);

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Could not get course data', { variant: 'error' });
    }
  }, [error]);

  const Attribute = styled('div')({
    margin: 'auto',
    padding: '1rem',
    maxWidth: '20rem',
    textAlign: 'center',
  });

  const AttributeValue = styled(Typography)({
    fontSize: '1.125rem',
  });

  return (
    <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container maxWidth="68rem" width="100%" alignSelf="center">
        <Grid xs={6} md={3}>
          <Attribute>
            <h4>Course</h4>
            <AttributeValue>
              <Skeleton loading={isLoading}>
                {isLoading ? 'Biology II' : data?.name}
              </Skeleton>
            </AttributeValue>
          </Attribute>
        </Grid>
        <Grid xs={6} md={3} textAlign="center">
          <Attribute>
            <h4>Teacher</h4>
            <AttributeValue>
              <Skeleton loading={isLoading}>
                {isLoading ? 'Mr. Black' : data?.teacher}
              </Skeleton>
            </AttributeValue>
          </Attribute>
        </Grid>
        <Grid xs={6} md={3} textAlign="center">
          <Attribute>
            <h4>Classroom</h4>
            <AttributeValue>
              <Skeleton loading={isLoading}>
                {isLoading ? '101' : data?.classroom}
              </Skeleton>  
            </AttributeValue>
          </Attribute>
        </Grid>
        <Grid xs={6} md={3} textAlign="center">
          <Attribute>
            <h4>Capacity</h4>
            <AttributeValue>
              <Skeleton loading={isLoading}>
                {isLoading ? '11/30' : `${data?.students?.length}/${data?.capacity}`}
              </Skeleton>
            </AttributeValue>
          </Attribute>
        </Grid>
      </Grid>
      <Stack gap={1}>
        <Box textAlign="center">
          <h4>Enrolled students</h4>
        </Box>
        <Students loading={isLoading} data={data?.students} />
      </Stack>
    </Stack>
  );
};
