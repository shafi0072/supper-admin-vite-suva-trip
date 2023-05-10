import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { baseUrl } from '../../../../../config/serverConfig';
const Reqeuest = ({ hotelId, adminId, hotels, handleClose }) => {

  const filterHotel = hotels?.filter(items =>  items._id === hotelId)

 
  const handleRequest = () => {
    fetch(`${baseUrl}/hotel/details/hotel/${filterHotel[0]?.listed[0]?._id}/isDocumentRequired`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isDocumentRequired: true })
    })
      .then(res => res.json())
      .then(data => {if(data?.modifiedCount=== 1){
        handleClose()
      }})
      .catch(err => console.log(err))
  }

  return (
    <div className='text-center'>
      <h1 className="text-light text-xl font-bold">Add what you need ? add from here </h1>


      <p>The Documents Are</p>
      <p>Commercial Registration <br />
        Tax Card <br />
        VAT registration <br />
        Hotel Registration</p>
      <button className='btn custom_green_color text-light' onClick={handleRequest}>Request For Documents</button> <br />
    </div>
  );
};

export default Reqeuest;