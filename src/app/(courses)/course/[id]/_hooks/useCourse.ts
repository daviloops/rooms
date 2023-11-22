'use client';

import { useEffect } from "react";
import useSWR from "swr";
import { enqueueSnackbar } from "notistack";

import { getById } from "@/utils/fetcher";

const useCourse = ({ id }: { id: string | number }) => {
  const { data, isLoading, error, mutate } = useSWR(['/api/course', id], getById);

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Could not get course data', { variant: "error" });
    }
  }, [error]);

  return { data, error, isLoading, mutate };
};

export default useCourse;
