'use client';

import { useState } from 'react';

import SvgIcon from "@mui/joy/SvgIcon";
import Button from "@mui/joy/Button";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Tooltip from '@mui/joy/Tooltip';

import AddStudentIcon from '../../public/icons/addStudent.svg';
import AddStudentForm from './AddStudentForm';

const AddStudentButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const onSuccess = () => closeDialog();

  return (
    <>
      <Tooltip title="Create student" arrow>
        <Button
          onClick={openDialog}
          sx={{
            '&:hover': {
              '& svg path': {
                fill: (theme) => theme.palette.text.primary,
              },
            },
          }}
        >
          <SvgIcon
            component={AddStudentIcon}
            viewBox="0 0 32 20"
            sx={{ height: '2rem', width: '2rem' }}
          />
        </Button>
      </Tooltip>
      <Modal open={dialogOpen} onClose={closeDialog}>
        <ModalDialog size="lg" minWidth="28rem">
          <DialogTitle>Add new student to the system</DialogTitle>
          <DialogContent>
            <ModalClose />
            <AddStudentForm onSuccess={onSuccess} />
          </DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AddStudentButton;
