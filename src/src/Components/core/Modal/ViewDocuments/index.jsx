import Link from 'next/link';
import React from 'react';

const ViewDocuments = ({ hotelId, hotels, handleClose }) => {
  const filterHotel = hotels?.filter(items => items._id === hotelId)
  console.log({ filterHotel })
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          filterHotel[0]?.listed[0]?.documents?.map(items => <Link href={items} target='_blank' className='border p-3 rounded'>
            <img className="w-28 max-w-full rounded-lg" src="https://img.freepik.com/free-icon/pdf_318-148750.jpg?w=2000" alt="" />
            <div className='w-48'>
              <p className="text-light text-sm  mt-2">Name:  {items?.replace("https://suva-trip-exist.s3.amazonaws.com/", "")}</p>
            </div>
          </Link>)
        }
      </div>
    </div>
  );
};

export default ViewDocuments;