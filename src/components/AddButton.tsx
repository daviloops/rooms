'use client';

import { MouseEventHandler, useState } from 'react';

import IconButton from '@mui/joy/IconButton';
import SvgIcon from '@mui/joy/SvgIcon';
import Tooltip from '@mui/joy/Tooltip';

import PlusIcon from '../../public/icons/plus.svg';
import PlusFilledIcon from '../../public/icons/plusFilled.svg';

export interface AddButtonProps {
  tooltipText: string,
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const AddButton = ({tooltipText, onClick, ...props }: AddButtonProps)  => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Tooltip title={tooltipText} arrow>
      <IconButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        sx={{
          borderRadius: '50%',
          
          '&:hover': {
            backgroundColor: 'inherit',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        }}
        {...props}
      >
        <SvgIcon
          sx={{ fontSize: '2rem' }}
          component={isHovered ?  PlusFilledIcon : PlusIcon}
          viewBox="0 0 40 40"
        />
      </IconButton>
    </Tooltip>
  );
};

export default AddButton;
