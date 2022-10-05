import React from 'react';
import Banner from '../Banner/Banner';
import ConectUs from '../ConectUs/ConectUs';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

import ServicesModules from '../ServicesModules/ServicesModules';
import Footer from '../shared/Footer/Footer';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div >

            <Banner/>
            <div className="px-12">
            <Info/>
            <Services/>
            <ServicesModules/>
            <MakeAppointment/>
            <Testimonials/>
            <ConectUs/>
            <Footer/>
            </div>
        </div>
    );
};

export default Home;