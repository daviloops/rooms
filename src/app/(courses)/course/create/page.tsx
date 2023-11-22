'use client';

import { useState } from 'react';

import CreateCourseForm from "@/app/(courses)/course/create/_components/CreateCourseForm";
import CreateCourseSuccess from '@/app/(courses)/course/create/_components/CreateCourseSuccess';
import type { Course } from '@/types';

export default function CourseCreate() {
  const [formState, setFormState] = useState('success');
  const [newCourse, setNewCourse] = useState<Course>();

  const onSuccess = ({ data }: { data: Course }) => {
    setNewCourse(data);
    setFormState('success');
  };

  const isSuccess = () => formState === 'success';

  const onRestart = () => setFormState('start');

  return (
    <>
      {isSuccess() ? (
        <CreateCourseSuccess newCourse={newCourse} onRestart={onRestart} />
      ) : (
        <CreateCourseForm onSuccess={onSuccess} />
      )}
    </>
  );
};
