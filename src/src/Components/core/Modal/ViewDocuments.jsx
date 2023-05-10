import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Profile from './Profile';
import Doc from './ViewDocuments/index'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -30%)',

  boxShadow: 24,
  
  p: 4,
};

export default function ViewDocuments({open, handleClose, hotels, hotelId, }) {




  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-gray-600 rounded">
          <Doc hotels={hotels} hotelId={hotelId}  handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}