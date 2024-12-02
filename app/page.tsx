'use client';
import Modal from '@/components/modal/Modal';
import { Button, Skeleton, Stack } from '@mui/material';
import { Box } from '@mui/system';
interface HeaderProps {
  title: string;
  requestClose: () => void;
}

function page() {
  const Header = () => {
    return (
      <Stack direction={'row'}>
        <Box></Box>
        <Box>X</Box>
      </Stack>
    );
  };
  const Body = () => {
    return <Skeleton variant="rectangular" width={'50vw'} height={'50vh'} />;
  };
  const Footer = () => {
    return (
      <Stack padding={2} justifyContent={'flex-end'} direction="row" gap={2}>
        <Button onClick={() => console.log('Confirmed')} variant="contained">
          Confirm
        </Button>
        <Button onClick={() => console.log('Canceled')} variant="contained">
          Cancel
        </Button>
      </Stack>
    );
  };
  return (
    <div>
      <Modal
        onConfirm={() => console.log('Confirmed')}
        isConfirmationModal
        isOpen={true}
        headerComponent={Header}
        bodyComponent={Body}
        footerComponent={Footer}
        onCancel={() => console.log('Canceled')}
        onClose={() => console.log('Modal closed')}
      >
        <div>Modal content goes here.</div>
      </Modal>
    </div>
  );
}

export default page;
