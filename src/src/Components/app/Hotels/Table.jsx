import React from 'react';
import MoreIcon from '@mui/icons-material/More';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Table = ({ hotels, handleOpen, setHotelId, handleOpen2, handleOpen3, handleOpen4 }) => {
console.log({hotels})
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  console.log(hotels[1]?.listed[0]?.documents?.length)
  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setHotelId(id)

  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log({ hotels })
  return (
    <table className="table text-light w-full">
      <thead>
        <tr>
          <th scope="col" className='border-r border-l border-t'>Profile Pictures</th>
          <th className='text-center border-r border-l border-t' scope="col">Hotel Id</th>
          <th className='text-center border-l border-t' scope="col">Hotel Name</th>
          <th className='text-center border-l border-t' scope="col">contactName</th>
          <th className='text-center border-l border-t' scope="col">email</th>
          <th className='text-center border-l border-t' scope="col">phoneNumber</th>
          <th className='text-center border-l border-t' scope="col">Address</th>
          <th className='text-center border-l border-t' scope="col">Country</th>
          <th className='text-center border-l border-t' scope="col">Stars</th>
          <th className='text-center border-l border-t' scope="col">status</th>
          <th className='text-center border-l border-t border-r' scope="col">settings</th>
        </tr>
      </thead>
      <tbody>
        {hotels?.map((items, index) =>
          <tr>
            <th className='text-center border-r  border-l' scope="row"><img src={items?.listed[0]?.images[0]} alt="" className='w-16' /></th>
            <td className='text-center border-r border-l' >{items?.listed[0]?.hotelId}</td>
            <td className='text-center border-r' >{items?.listed[0]?.NameOfProperty}</td>
            <td className='text-center border-r' >{items?.listed[0]?.contactName}</td>
            <td className='text-center border-r' >{items?.listed[0]?.email}</td>
            <td className='text-center border-r'>{items?.listed[0]?.phoneNumber}</td>
            <td className='text-center border-r'>{items?.listed[0]?.StreetAddress}, {items?.listed[0]?.City}</td>
            <td className='text-center border-r' >{items?.listed[0]?.Country}</td>
            <td className='text-center border-r'>{items?.listed[0]?.Stars}</td>
            <td className='mt-3 border-r'><span className={`${items?.isAdmin === "Approved" ? "bg-success" : "bg-danger"} p-2 rounded text-center`}>{items?.isAdmin}</span></td>
            <td className='text-center border-r' onClick={(e) => handleClick(e, items?._id)}><div className='rotator'><MoreIcon /></div></td>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={(e) => { handleOpen(); handleClose() }}>view Profile</MenuItem>
              <MenuItem onClick={() => { handleClose(items?.listed[0]?._id); handleOpen3() }}>
                {items?.listed[0]?.documents?.length > 0 ? "view Documents" : "Request For Documents"}
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); handleOpen4() }}>View Documents</MenuItem>
              <MenuItem onClick={handleClose}>Block</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Disable</MenuItem>
              <MenuItem onClick={() => { handleClose(); handleOpen2() }}>Approve</MenuItem>
            </Menu>
          </tr>)}
      </tbody>
    </table>
  );
};

export default Table;