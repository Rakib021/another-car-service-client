import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import AppointmentService from '../AppointmentService/AppointmentService';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointments = ({date}) => {

const [services,setServices] = useState([]);
const [bookingModal,setBookingModal] = useState(null);

useEffect(()=>{
    fetch('http://localhost:5000/appointmentService')
    .then(res =>res.json())
    .then(data =>setServices(data));
},[])
    return (
        <div>
            <h3 className="text-xl text-accent text-center">Available Appointments on :{format(date, 'PP')} </h3>
        <div className="text-center m-4 ">
       <h1 className="text-accent text-xl font-bold uppercase">Auto Repair services</h1>
       <h3 className="text-4xl">Services we provide</h3>
       </div>
       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {
              services.map(appointmentService =><AppointmentService
              
              key={appointmentService._id}
              appointmentService ={appointmentService}
              setBookingModal={setBookingModal}
              ></AppointmentService>)
          }
       </div>
       {bookingModal && <BookingModal 
       date={date} 
       bookingModal={bookingModal}
       setBookingModal={setBookingModal}
       ></BookingModal>}
   </div>
    );
};

export default AvailableAppointments;
{/* <h3 className="text-xl text-accent text-center">Available Appointments on :{format(date, 'PP')} </h3> */}