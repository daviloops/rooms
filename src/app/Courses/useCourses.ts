'use client';

import { useEffect } from "react";
import useSWR from "swr";
import { enqueueSnackbar } from "notistack";

import { get } from "@/utils/fetcher";

const useCourses = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/course', get);

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Could not get courses data', { variant: "error" });
    }
  }, [error]);

  return { data, error, isLoading, mutate };
};

export default useCourses;
