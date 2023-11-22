'use client';

import { useState } from 'react';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

import AddStudentForm from '@/app/(courses)/course/[id]/@students/@addStudent/_components/AddStudentForm';
import AddButton from '@/components/AddButton';

const AddStudentModal = ({ params }: { params: { id: string } }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  const onSuccess = () => closeDialog();

  return (
    <>
      <AddButton tooltipText="Add student" onClick={openDialog} />
      <Modal open={dialogOpen} onClose={closeDialog}>
        <ModalDialog size="lg" minWidth="28rem">
          <DialogTitle>Add student to the course</DialogTitle>
          <DialogContent>
            <ModalClose />
            <AddStudentForm onSuccess={onSuccess} courseId={params.id} />
          </DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AddStudentModal;