import React from "react";
import { format } from "date-fns";
const BookingModal = ({ bookingModal, date,setBookingModal }) => {
  const {_id, name,slots } = bookingModal;


  const handleBooking =event =>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(_id,name,slot);
      setBookingModal(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg text-secondary">
            Booking For : {name}!
          </h3>
          <form onSubmit={ handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-5">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
             {
                 slots.map(slot =><option value={slot}>{slot}</option>)
             }
              
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
