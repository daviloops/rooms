'use client';

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { enqueueSnackbar } from 'notistack';

import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import { Theme } from '@mui/joy/styles';

import ControlledInput from '@/components/ControlledInput';
import ControlledAutocomplete from '@/components/ControlledAutocomplete';
import useCourses from '@/app/(courses)/_hooks/useCourses';
import type { Course } from "@/types";

interface ICreateStudentFormData {
  name: string
  email: string
  age: number
  gender?: string
  courses: Array<Course>
}

const validationSchema = yup.object().shape({
  name: yup.string()
  .required('Student name is required'),
  email: yup.string()
  .required('Email is required')
  .email('Invalid email'),
  age: yup.number()
  .required('Age is required')
  .integer('Needs to be integer')
  .test(
    'Is positive?',
    'Needs to be positive',
    (value) => value > 0
  ),
  gender: yup.string(),
  courses: yup.array<Course>()
  .required('A course is required'),
});

const AddStudentForm = ({ onSuccess }: { onSuccess: Function }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: dataCourses, isLoading: isLoadingCourses } = useCourses();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ICreateStudentFormData>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      age: 0,
      gender: '',
      courses: [],
    },
  });
  const { name, email, age, gender, courses } = watch();

  const onSubmit = handleSubmit(async () => {
    const coursesIds = courses.map(item => ({ id: item.id }));

    const payload = {
      name,
      email,
      age: Number(age),
      gender,
      courses: coursesIds,
    };

    setIsLoading(true);
    await fetch(
      '/api/student',
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
      enqueueSnackbar('Student created successfully', { variant: "success" });
    })
    .catch((e) => {
      enqueueSnackbar('Could not create student', { variant: "error" });
      console.error(e);
    })
    .finally(() => setIsLoading(false));
  });

  const labelProps = {
    sx: {
      '&.MuiFormLabel-root': { color: (theme: Theme) => theme.palette.text.primary }
    },
  };

  return (
    <form onSubmit={onSubmit} noValidate>    
      <Stack spacing={3} maxWidth="22.5rem" sx={{ margin: 'auto', pt: 2 }}>
        <Grid container gap={1}>
          <Grid xs={12}>
            <ControlledInput
              label="Name"
              name="name"
              placeholder="Pepe Xochitl"
              control={control}
              errors={errors}
              required
              labelProps={labelProps}
            />
          </Grid>
          <Grid xs={12}>
            <ControlledInput
              label="Email"
              name="email"
              placeholder="pepe@hotmail.com"
              control={control}
              errors={errors}
              required
              labelProps={labelProps}
            />
          </Grid>
          <Grid container gap={3}>
            <Grid xs>
              <ControlledInput
                label="Age"
                name="age"
                placeholder="27"
                type="number"
                control={control}
                errors={errors}
                required
                labelProps={labelProps}
              />
            </Grid>
            <Grid xs>
              <ControlledInput
                label="Gender"
                name="gender"
                placeholder="Man"
                control={control}
                errors={errors}
                labelProps={labelProps}
              />
            </Grid>
          </Grid>
          <Grid xs={12}>
            <ControlledAutocomplete
              label="Courses"
              name="courses"
              disableCloseOnSelect
              control={control}
              errors={errors}
              loading={isLoadingCourses}
              multiple
              options={dataCourses || []}
              placeholder="Enter the courses names..."
              limitTags={2}
              getOptionLabel={(option: any) => option.name || ''}
              isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
              labelProps={labelProps}
            />
          </Grid>
        </Grid>
        <Box textAlign="end">
          <Button
            loading={isLoading}
            type="submit"
            sx={(theme) => ({
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
              backgroundColor: 'inherit',

              '&:hover': {
                color: '#FFF',
                backgroundColor: theme.palette.text.primary,
              },
              '&:active': {
                transform: 'scale(0.98)',
              }
            })
            }
          >
            Create
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default AddStudentForm;
