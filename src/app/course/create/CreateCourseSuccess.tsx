'use client';

import { useRouter } from "next/navigation";

import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Button from "@/components/Button";
import Typography from "@mui/joy/Typography";
import SvgIcon from '@mui/joy/SvgIcon';

import type { Course } from '@/types';

import SuccessIcon from '../../../../public/icons/success.svg';

interface CreateCourseSuccessProps {
  newCourse: Course | undefined
  onRestart: Function
}

const CreateCourseSuccess = ({ newCourse, onRestart }: CreateCourseSuccessProps) => {
  const router = useRouter();

  const handleGoToCourse = () => router.push(`/course/${newCourse?.id || ''}`);
  const handleCreateNew = () => onRestart();
  const handleBrowseCourses = () => router.push('/');

  return (
    <Stack spacing={8}>
      <Stack spacing={2} textAlign="center" pt={4}>
        <Box>
          <SvgIcon component={SuccessIcon} sx={{ width: '7.5rem', height: '7.5rem' }} viewBox="0 0 120 120" />
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
          <Typography maxWidth="20rem">The course {newCourse?.name || ''} was created successfully</Typography>
        </Box>
        <Box>
          <Button onClick={handleGoToCourse}>Go to the course</Button>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Button onClick={handleCreateNew}>Create a new course</Button>
        <Button onClick={handleBrowseCourses}>Browse all courses</Button>
      </Stack>
    </Stack>
  );
};

export default CreateCourseSuccess;
