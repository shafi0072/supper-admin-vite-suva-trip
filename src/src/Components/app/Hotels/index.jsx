import React, { useEffect, useState } from 'react';
import Table from './Table';
import { baseUrl } from '../../../../config/serverConfig';
import ProfileModal from '../../core/Modal/ProfileModal';
import ComissionModal from '../../core/Modal/ComissionModal';
import RequstForDocuments from '../../core/Modal/RequestForDocument/index'
import ViewDocuments from '../../core/Modal/ViewDocuments';
const Index = () => {
  const [hotels, setHotels] = useState([])
  const [hotelId, setHotelId] = useState('');
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [adminId, setAdminId] = useState('')
  const handleOpen = (id) => {

    setOpen(true)
  }
  const handleOpen2 = (id) => {

    setOpen2(true)
  }
  const handleOpen3 = (id) => {

    setAdminId(id)
    setOpen3(true)
  }
  const handleOpen4 = (id) => {

    setAdminId(id)
    setOpen4(true)
  }
  const handleClose = () => setOpen(false)
  const handleClose2 = () => setOpen2(false)
  const handleClose3 = () => setOpen3(false)
  const handleClose4 = () => setOpen4(false)
  useEffect(() => {
    fetch(`${baseUrl}/hotel/hotelByuserId`)
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => console.log(err))
  }, [hotels])
  return (
    <div>
      <h1 className="text-3xl  text-light">Get Access For All of the hotels</h1>
      <div className='w-full'>
        <Table hotels={hotels} handleOpen={handleOpen} setHotelId={setHotelId} handleOpen2={handleOpen2} handleOpen3={handleOpen3} handleOpen4={handleOpen4} />
        <ProfileModal handleOpen2={undefined} hotels={hotels} open={open} handleClose={handleClose} hotelId={hotelId} />
        <ComissionModal  open={open2} handleClose={handleClose2} hotels={hotels} hotelId={hotelId} />
        <RequstForDocuments hotels={hotels} open={open3} handleClose={handleClose3} hotelId={hotelId} adminId={adminId} />
        <ViewDocuments open={open4} handleClose={handleClose4} hotels={hotels} hotelId={hotelId} />
      </div>
    </div>
  );
};

export default Index;