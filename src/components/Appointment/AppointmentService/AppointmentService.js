import React from 'react';
import TriggerBtn from '../../Home/shared/TriggerBtn/TriggerBtn';

const AppointmentService = ({appointmentService,setBookingModal}) => {
    const {name,price,img,slots} = appointmentService;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body text-center">
          <h2 className="text-xl text-sky-400/100">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
              {
                  slots.length>0
                  ?<span>{slots[0]}</span>:
                  <span>No slots available</span>
              }
          </p>
          <p>{slots.length} {slots.length >1 ? 'spaces' :'space'} Available</p>
          <div className="card-actions justify-center">
         
          <label
         
          onClick={()=>setBookingModal(appointmentService)}
          disabled ={slots.length ===0}
          htmlFor="booking-modal" className="btn btn-sm modal-button btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Book Appointment</label>
      
          </div>
        </div>
      </div>
    );
};

export default AppointmentService;