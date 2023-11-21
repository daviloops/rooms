import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
import Table from '@mui/joy/Table';
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

import type { Student } from "@/types";

const StudentsTable = ({ loading, data }: { loading: boolean, data: Array<Student> }) => {
  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Table aria-label="Students table" stickyHeader sx={{ minWidth:'40rem' }}>
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Name</th>
            <th style={{ width: '15%' }}>Student ID</th>
            <th style={{ width: '30%' }}>Email</th>
            <th style={{ width: '10%' }}>Age</th>
            <th style={{ width: '15%' }}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {(loading ? [...Array(7)] : data)?.map((item: Student, index: number) => (
            <tr key={loading ? index : item.id}>
              <td>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar size="sm" />
                  <Typography>
                    <Skeleton loading={loading}>
                      {loading ? 'Pepe Harrison' : item.name}
                    </Skeleton>
                  </Typography>
                </Stack>
              </td>
              <td>
                <Typography>
                  <Skeleton loading={loading}>
                    {loading ? '1123581321' : item.id}
                  </Skeleton>
                </Typography>
              </td>
              <td>
                <Typography>
                  <Skeleton loading={loading}>
                    {loading ? 'pepe@hotmail.com' : item.email}
                  </Skeleton>
                </Typography>
              </td>
              <td>
                <Typography>
                  <Skeleton loading={loading}>
                    {loading ? '11' : item.age}
                  </Skeleton>
                </Typography>
              </td>
              <td>
                <Typography>
                  <Skeleton loading={loading}>
                    {loading ? 'Male' : item.gender}
                  </Skeleton>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default StudentsTable;
