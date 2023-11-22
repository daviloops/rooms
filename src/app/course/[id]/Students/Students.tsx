'use client';

import { useEffect, useState } from "react";
const store = require('store');

import { styled } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";

import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import IconButton from '@mui/joy/IconButton';
import SvgIcon, { SvgIconProps } from '@mui/joy/SvgIcon';

import AddStudentModal from "@/app/course/[id]/Students/AddStudentModal";
import StudentsGallery from "@/app/course/[id]/Students/StudentsGallery";
import StudentsTable from "@/app/course/[id]/Students/StudentsTable";

import AppsIcon from '../../../../../public/icons/apps.svg';
import AppsFilledIcon from '../../../../../public/icons/appsFilled.svg';
import TableIcon from '../../../../../public/icons/table.svg';
import TableFilledIcon from '../../../../../public/icons/tableFilled.svg';

const Students = ({ courseId }: { courseId: string }) => {
  const [tabValue, setTabValue] = useState<string | null>('gallery');

  const storeVal = store.get('studentsView');

  useEffect(() => {
    if (storeVal !== tabValue) {
      setTabValue(storeVal);
    }
  }, [storeVal]);
  
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
      <Stack direction="row" justifyContent="space-between">
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
        <Box>
          <AddStudentModal courseId={courseId} />
        </Box>
      </Stack>
      
      {tabValue === 'gallery' ? (
        <StudentsGallery courseId={courseId} />
      ) : (
        <StudentsTable courseId={courseId} />
      )}
    </Stack>
  );
};

export default Students;
