import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import Skeleton from "@mui/joy/Skeleton";

import type { Student } from "@/types";

const GalleryView = ({ loading, data }: { loading: boolean, data: Array<Student> }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {(loading ? [...Array(4)] : data)?.map((item: Student, index: number) => (
        <Grid key={loading ? index : item.id}>
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
              <Skeleton loading={loading}>
                {loading ? 'Pepe Harrison' : item.name}
              </Skeleton>
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryView;
