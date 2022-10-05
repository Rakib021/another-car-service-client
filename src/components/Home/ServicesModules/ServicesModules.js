import React from 'react';
import serviceModule1 from '../../../images/services/1.jpg';
import serviceModule2 from '../../../images/services/2.jpg';
import serviceModule3 from '../../../images/services/3.jpg';
import serviceModule4 from '../../../images/services/4.jpg';
import serviceModule5 from '../../../images/services/5.jpg';
import serviceModule6 from '../../../images/services/6.jpg';
import ServicesModule from '../ServicesModule/ServicesModule';


const ServicesModules = () => {
    const servicesModules =[
        {
            _id :1,
            name :"ENGINE DIAGNOSTIC",
            price:130,
            description : '',
            img:serviceModule1,
        
        },
        {
            _id :2,
            name :"WHEEL ALIGNMENT",
            price:100,
            description : '',
            img:serviceModule2,
        
        },
        {
            _id :3,
            name :"OIL CHANGING",
            price:200,
            description : '',
            img:serviceModule3,
        
        },
        {
            _id :4,
            name :"BRAKE REPARING",
            price:190,
            description : '',
            img:serviceModule4,
        
        },
        {
            _id :5,
            name :"COMPLETE ANALYSIS",
            price:100,
            description : '',
            img:serviceModule5,
        
        },
        {
            _id :6,
            name :"WASH AND GLASSING",
            price:50,
            description : '',
            img:serviceModule6,
        
        },

    ];
    return (
        <div>
             <div className="text-center m-4 ">
            <h1 className="text-accent text-xl font-bold uppercase">Auto Repair services</h1>
            <h3 className="text-4xl">Services we provide</h3>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
               {
                   servicesModules.map(servicesModule =><ServicesModule
                   
                   key={servicesModule._id}
                   servicesModule ={servicesModule}
                   ></ServicesModule>)
               }
            </div>
        </div>
    );
};

export default ServicesModules;