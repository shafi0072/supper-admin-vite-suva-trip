import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Profile from './Profile';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -30%)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProfileModal({open, handleClose, hotels, hotelId, handleOpen2}) {




  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Profile hotelId={hotelId} hotels={hotels}/>
        </Box>
      </Modal>
    </div>
  );
}