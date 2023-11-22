'use client';

import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { enqueueSnackbar } from 'notistack';

import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';

import ControlledAutocomplete from '@/components/ControlledAutocomplete';

import type { Student } from "@/types";
import { Theme } from '@mui/joy/styles';
import useCourse from '@/app/(courses)/course/[id]/_hooks/useCourse';
import useStudents from '@/app/(students)/_hooks/useStudents';

interface IAddStudentFormData {
  students: Array<Student>
}

const validationSchema = yup.object().shape({
  students: yup.array<Student>()
  .min(1, "At least 1 student is required")
  .required('A student is required'),
});

const AddStudentForm = ({
  onSuccess,
  courseId,
}: {
  onSuccess: Function,
  courseId: string,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredStudents, setFilteredStudents] = useState<Array<Student>>([]);

  const {
    data: dataStudents,
    error: errorStudents,
    isLoading: isLoadingStudents,
  } = useStudents();
  const { data: course, isLoading: loadingCourse, mutate } = useCourse({ id: courseId });

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IAddStudentFormData>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      students: [],
    },
  });
  const { students } = watch();

  useEffect(() => {
    if (errorStudents) {
      enqueueSnackbar('Could not get students data', { variant: "error" });
    }
  }, [errorStudents]);

  useEffect(() => {
    if (dataStudents && course?.students) {
      const arr = dataStudents.filter(
        (student: Student) => !course?.students?.find((item: Student) => item.id === student.id)
      );
      setFilteredStudents(arr);
    }
  }, [dataStudents, course?.students]);

  const onSubmit = handleSubmit(async () => {
    const studentsIds = students.map(item => ({ id: item.id }));

    const payload = {
      students: studentsIds,
    };

    setIsLoading(true);
    await fetch(
      `/api/course/${course.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )
    .then((res) => res.json())
    .then((data) => {
      onSuccess({ data });
      enqueueSnackbar('Student(s) added successfully', { variant: "success" });

      mutate({ ...course, students: data.students });
    })
    .catch((e) => {
      enqueueSnackbar('Could not add student(s)', { variant: "error" });
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
            <ControlledAutocomplete
              label="Students"
              name="students"
              disableCloseOnSelect
              control={control}
              errors={errors}
              loading={isLoadingStudents || loadingCourse}
              multiple
              options={filteredStudents}
              placeholder="Enter the students names..."
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
            Add
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default AddStudentForm;
