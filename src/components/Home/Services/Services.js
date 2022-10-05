import React from 'react';
import firstService from '../../../images/icons/autoRepair.jpg';
import secondService from '../../../images/icons/carRent.jpg';
import thirdService from '../../../images/icons/carWash.jpg';
import Service from '../Service/Service';

const Services = () => {
    const services =[
{
    _id :1,
    name :"Premium Car service",
    description : '',
    img:firstService,

},
{
    _id :2,
    name :"Rent Car",
    description : '',
    img:secondService,

},
{
    _id :3,
    name :"Car Washing service",
    description : '',
    img:thirdService,

},
    ];
    return (
        <div className="my-28">
            <div className="text-center m-4 ">
            <h1 className="text-secondary text-xl font-bold uppercase">Our services</h1>
            <h3 className="text-4xl">Services we provide</h3>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    services.map(service =><Service
                    key ={service._id}
                    service={service}
                 

                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;