'use client';

import { useEffect, useState } from "react";
const store = require('store');

import { styled } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";

import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import IconButton from '@mui/joy/IconButton';
import SvgIcon, { SvgIconProps } from '@mui/joy/SvgIcon';

import AddButton from "@/components/AddButton";
import StudentsGallery from "@/app/course/[id]/Students/StudentsGallery";
import StudentsTable from "@/app/course/[id]/Students/StudentsTable";

import AppsIcon from '../../../../../public/icons/apps.svg';
import AppsFilledIcon from '../../../../../public/icons/appsFilled.svg';
import TableIcon from '../../../../../public/icons/table.svg';
import TableFilledIcon from '../../../../../public/icons/tableFilled.svg';

import type { Student } from "@/types";

const Students = ({ loading, data }: { loading: boolean, data: Array<Student> }) => {
  const [tabValue, setTabValue] = useState<string | null>('gallery');

  useEffect(() => {
    const val = store.get('studentsView');
    setTabValue(val);
  }, []);
  
  const TabButton = styled(IconButton)(({ theme }) => ({
    '&:hover': {
      '& svg path': {
        fill: theme.palette.text.primary,
      },
    },
    '&[aria-pressed="true"]': {
      backgroundColor: 'inherit',
      '&:hover': {
        '& svg path': {
          fill: '#FFF',
        },
      },
    },
  }));

  const TabIcon = (props: SvgIconProps) => (
    <SvgIcon viewBox="0 0 50 50" sx={{ width: '1rem', height: '1rem' }} {...props} />
  );

  return (
    <Stack spacing={1}>
      <Stack direction="row" justifyContent="flex-start">
        <Box>
          <ToggleButtonGroup
            value={tabValue}
            onChange={(_, newValue) => {
              store.set('studentsView', newValue);
              setTabValue(newValue);
            }}
          >
            <TabButton value="gallery">
              <TabIcon component={tabValue === 'gallery' ? AppsFilledIcon : AppsIcon} />
            </TabButton>
            <TabButton value="table">
              <TabIcon component={tabValue === 'table' ? TableFilledIcon : TableIcon} />
            </TabButton>
          </ToggleButtonGroup>
        </Box>
        {/* // Todo: add student */}
        {/* <Box>
          <AddButton />
        </Box> */}
      </Stack>

      {tabValue === 'gallery' ? (
        <StudentsGallery loading={loading} data={data} />
      ) : (
        <StudentsTable loading={loading} data={data} />
      )}
    </Stack>
  );
};

export default Students;
