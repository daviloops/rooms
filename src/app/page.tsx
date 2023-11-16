'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import IconButton from '@mui/joy/IconButton';
import SvgIcon from '@mui/joy/SvgIcon';
import Stack from '@mui/joy/Stack';
import PlusIcon from '../../public/icons/plus.svg';
import PlusFilledIcon from '../../public/icons/plusFilled.svg';

export default function Home() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const classrooms = [
    { id: 0, classroom: '101', course: 'Biology I' },
    { id: 1, classroom: '103', course: 'Biology II' },
    { id: 2, classroom: '101', course: 'Chemistry II sdgag asdg adsgasdgasdga' },
    { id: 3, classroom: '101', course: 'Biology I' },
    { id: 4, classroom: '103', course: 'Biology II' },
    { id: 5, classroom: '101', course: 'Chemistry II sdgag asdg adsgasdgasdga' },
    { id: 6, classroom: '101', course: 'Biology I' },
    { id: 7, classroom: '103', course: 'Biology II' },
    { id: 8, classroom: '101', course: 'Chemistry II sdgag asdg adsgasdgasdga' },
  ]

  return (
    <Stack direction="column" gap={4} display="flex" justifyContent="center">
      <Box textAlign="end">
        <IconButton
          onClick={() => router.push('/course/create')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            borderRadius: '50%',

            '&:hover': {
              backgroundColor: 'inherit',
            },
            '&:active': {
              transform: 'scale(0.98)',
            },
          }}
        >
          <SvgIcon sx={{ fontSize: '2rem' }} component={isHovered ?  PlusFilledIcon : PlusIcon} viewBox="0 0 40 40" />
        </IconButton>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {classrooms.map(item => (
          <Grid key={item.id}>
            <Box
              onClick={() => router.push(`/course/${item.id}`)}
              sx={{
                height: '100%',
                width: '17rem',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '2px solid white',
                borderRadius: '1.25rem',
                textAlign: 'center',
                padding: '1rem',
                transition: 'ease-in background-color transform color 0.2s',

                '&:hover': {
                  backgroundColor: '#FFF',

                  '& p': {
                    color: '#000 !important',
                  }
                },
                '&:active': {
                  transform: 'scale(0.98)',
                },
                
              }}>
              <Typography fontSize="2rem" sx={{ wordBreak: 'break-all' }}>{item.classroom}</Typography>
              <Typography fontSize="1.5rem" sx={{ wordBreak: 'break-all' }}>{item.course}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
