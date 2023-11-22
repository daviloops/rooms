'use client';

import { useEffect } from "react";
import useSWR from "swr";
import { enqueueSnackbar } from "notistack";

import { get } from "@/utils/fetcher";

const useStudents = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/student', get);

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Could not get students data', { variant: "error" });
    }
  }, [error]);

  return { data, error, isLoading, mutate };
};

export default useStudents;
