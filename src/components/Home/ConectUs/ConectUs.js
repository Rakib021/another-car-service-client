import React from 'react';

const ConectUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-cyan-500 to-blue-500 text-white  ">
  <div className="hero-content  ">
    <div className="text-center lg:text-left">
      <h2 className="text-xl font-bold text-primary">Connected Us</h2>
      <h2 className="text-5xl font bold py-6">Stay Connected With Us</h2>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" placeholder="text" className="input input-bordered" />
          <label className="label">
          <span className="label-text">Your Message</span>
          </label>
          <textarea className="bg-neutral" name="message" id="message" cols="30" rows="5"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default ConectUs;