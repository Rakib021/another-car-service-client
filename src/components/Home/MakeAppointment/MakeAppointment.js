import React from 'react';
import experts from "../../../images/experts/experts.png";
import TriggerBtn from '../shared/TriggerBtn/TriggerBtn';

const MakeAppointment = () => {
    return (
        <section className="flex bg-gradient-to-r from-blue-500 to-transparent justify-center items-center my-24 w-auto rounded">
            <div className="flex-1 hidden lg:block px-16">
                <img className="ml-[300px] mt-[-40px]" src={experts} alt=""/>
            </div>
            <div className="flex-1 px-5">
                <h3 className="text-xl text-secondary">Appointment</h3>
                <h2 className="text-white ">Make an appointment today !!</h2>
                <p  className="text-white">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.</p>
                <TriggerBtn>Get Started</TriggerBtn>
            </div>
            
        </section>
    );
};

export default MakeAppointment;