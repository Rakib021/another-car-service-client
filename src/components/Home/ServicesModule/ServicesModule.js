import React from 'react';

const ServicesModule = ({servicesModule}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <figure className="px-10 pt-10">
          <img
            src={servicesModule.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl ">{servicesModule.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesModule;