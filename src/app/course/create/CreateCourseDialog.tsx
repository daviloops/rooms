'use client';

import { useState } from 'react';

import Box from "@mui/joy/Box";
import CreateCourseForm from '@/app/course/create/CreateCourseForm';
import CreateCourseSuccess from '@/app/course/create/CreateCourseSuccess';
import type { Course } from '@/types';


const CreateCourseDialog = () => {
  const [formState, setFormState] = useState('success');
  const [newCourse, setNewCourse] = useState<Course>();

  const onSuccess = ({ data }: { data: Course }) => {
    setNewCourse(data);
    setFormState('success');
  };

  const isSuccess = () => formState === 'success';

  const onRestart = () => setFormState('start');

  return (
    <Box
      p={3}
      maxWidth="28rem"
      width='100%'
      sx={{
        border: '2px solid white',
        borderRadius: '1.25rem',
      }}
    > 
      {isSuccess() ? (
        <CreateCourseSuccess newCourse={newCourse} onRestart={onRestart} />
      ) : (
        <CreateCourseForm onSuccess={onSuccess} />
      )}
    </Box>
  );
};

export default CreateCourseDialog;
