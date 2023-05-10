import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Profile from './Profile';
import { baseUrl } from '../../../../config/serverConfig';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width:'400px',
  transform: 'translate(-50%, -30%)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ComissionModal({open, handleClose, hotels, hotelId}) {
  const filterHotel = hotels?.filter(items =>  items._id === hotelId)
const [commission, setCommission] = React.useState('')
const handleOnSubmit = (e) => {
  e.preventDefault()

    fetch(`${baseUrl}/hotel/details/hotel/${filterHotel[0]?.listed[0]?._id}/commission`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ commission: parseInt(commission) })
    })
      .then(res => res.json())
      .then(data => {if(data?.modifiedCount=== 1){
        handleClose()
      }})
      .catch(err => console.log(err))
 
}


  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-gray-700 rounded">
          <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="" className="text-light text-xl font-bold">Set The comission</label>
            <input type="text" onChange={e => setCommission(e.target.value)} required className='form-control'/> 
            <button type='submit' className="custom_green_color btn text-light mt-3">Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}