import React from 'react';
import clock  from '../../../images/icons/clock.svg';
import marker  from '../../../images/icons/marker.svg';
import phone  from '../../../images/icons/phone.svg';

import InfoCard from '../../Home/Info/InfoCard/InfoCard';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard cardTitle= "Opening Hours" bgClass ="bg-accent"  img={clock}/>
            <InfoCard cardTitle= "Our Location"  bgClass ="bg-neutral" img={marker}/>
            <InfoCard cardTitle= "Contact Us"  bgClass ="bg-primary" img={phone}/>
        </div>
    );
};

export default Info;