import React from 'react';
import TriggerBtn from '../shared/TriggerBtn/TriggerBtn';

const Banner = () => {
    return (
        <div className="hero min-h-screen  px-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white my-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">We are Professional</h1>
      <h4 className="py-6">We will fix your car as you bought dammn new.We are dedicated to We care about your car as you do.</h4>
      <TriggerBtn>Get Started</TriggerBtn>
    </div>
  </div>
</div>
    );
};

export default Banner;