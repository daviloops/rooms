'use client';

import Skeleton from "@mui/joy/Skeleton";
import { styled } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";

import useCourse from "@/app/course/[id]/useCourse";

export default function CourseDetails({ params }: { params: { id: string }}) {
  const { data, isLoading } = useCourse({ id: params.id });

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
  );
};
