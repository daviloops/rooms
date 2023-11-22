'use client';

import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { enqueueSnackbar } from 'notistack';

import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';

import ControlledInput from '@/components/ControlledInput';
import ControlledAutocomplete from '@/components/ControlledAutocomplete';
import useStudents from '@/app/(students)/_hooks/useStudents';
import useCourses from '@/app/(courses)/_hooks/useCourses';
import type { Student } from '@/types';


interface ICreateCourseFormData {
  course: string
  classroom: string
  capacity: number
  teacher: string
  students: Array<Student>
}

const validationSchema = yup.object().shape({
  course: yup.string()
  .required('Course name is required'),
  classroom: yup.string()
  .required('Classroom name is required'),
  capacity: yup.number()
  .required('Capacity is required')
  .integer('Needs to be integer')
  .test(
    'Is positive?', 
    'Needs to be positive', 
    (value) => value > 0
  ),
  teacher: yup.string()
  .required('Teacher is required'),
  students: yup.array<Student>()
  .required('Students is required'),
});

const CreateCourseForm = ({ onSuccess }: { onSuccess: Function }) => {
  const {
    data: dataStudents,
    error: errorStudents,
    isLoading: isLoadingStudents,
  } = useStudents();
  const { data: coursesData, mutate } = useCourses();
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ICreateCourseFormData>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      course: '',
      classroom: '',
      capacity: 0,
      teacher: '',
      students: [],
    },
  });
  const { course, classroom, capacity, teacher, students } = watch();

  const onSubmit = handleSubmit(async () => {
    const studentsIds = students.map(item => ({ id: item.id }));

    const payload = {
      name: course,
      classroom,
      capacity: Number(capacity),
      teacher,
      students: studentsIds,
    };

    setIsLoading(true);
    await fetch(
      '/api/course',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )
    .then((res) => res.json())
    .then((data) => {
      onSuccess({ data });
      enqueueSnackbar('Course created successfully', { variant: "success" });

      mutate([ ...coursesData, { ...data } ]);
    })
    .catch((e) => {
      enqueueSnackbar('Could not create course', { variant: "error" });
      console.error(e);
    })
    .finally(() => setIsLoading(false));
    
  });

  useEffect(() => {
    if (errorStudents) {
      enqueueSnackbar('Could not get students data', { variant: "error" });
    }
  }, [errorStudents]);

  return (
    <form onSubmit={onSubmit} noValidate>
      <Stack gap={2} maxWidth="22.5rem" sx={{ margin: 'auto' }}>
        <Typography component="h3" fontSize="1.25rem" textAlign="center">
          New course
        </Typography>
        
        <Stack gap={3}>
          <Grid container gap={1} xs={12}>
            <Grid xs={12}>
              <ControlledInput
                label="Course"
                name="course"
                placeholder="Biology II"
                control={control}
                errors={errors}
                required
              />
            </Grid>
            <Grid container gap={3} direction="row">
              <Grid xs>
                <ControlledInput
                  label="Classroom"
                  name="classroom"
                  placeholder="101"
                  control={control}
                  errors={errors}
                  required
                />
              </Grid>
              <Grid xs>
                <ControlledInput
                  label="Capacity"
                  name="capacity"
                  placeholder="33"
                  type="number"
                  control={control}
                  errors={errors}
                  required
                />
              </Grid>
            </Grid>
            <Grid xs={12}>
              <ControlledInput
                label="Teacher"
                name="teacher"
                placeholder="Socrates"
                control={control}
                errors={errors}
                required
              />
            </Grid>
            <Grid xs={12}>
              <ControlledAutocomplete
                label="Students"
                name="students"
                disableCloseOnSelect
                control={control}
                errors={errors}
                loading={isLoadingStudents}
                multiple
                options={dataStudents || []}
                placeholder="Enter the students names..."
                limitTags={2}
                getOptionLabel={(option: any) => option.name || ''}
                isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
              />
            </Grid>
          </Grid>
          <Box textAlign="center">
            <Button loading={isLoading} type="submit">
              Create
            </Button>
          </Box>
        </Stack>
      </Stack>
    </form>
  );
};

export default CreateCourseForm;
