import React from 'react';
import people1 from '../../../images/review/people1.png';
import people2 from '../../../images/review/people2.png';
import people3 from '../../../images/review/people3.png';
import Review from './Review';


const Testimonials = () => {
    const reviews =[

        {
            _id :1,
            name:"Winson modella",
            review : '',
            location:'california',
            img :people1
        },
        {
            _id :2,
            name:"Winson modella",
            review : '',
            location:'california',
            img :people2
        },
        {
            _id :3,
            name:"Winson modella",
            review : '',
            location:'california',
            img :people3
        },
    ];
    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500  rounded p-4 ">
           <div>
               <h3 className="text-xl text-secondary text-center font-bold">Testimonials</h3>
               <h2 className="text-center text-3xl text-white fond-bold">What Customer Says About Us</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
               {
                   reviews.map(review =><Review
                   key={review._id}
                   review ={review}
                   ></Review>)
               }
               </div> 
        </section>
    );
};

export default Testimonials;