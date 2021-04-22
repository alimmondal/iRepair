import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://morning-island-75682.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
       <section className="my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h1 className="text-primary">Client Says </h1>
               </div>
               <div className="card-group mt-5">
                    {
                        reviews.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                    
                </div>
           </div>
       </section>
    );
};

export default Testimonials;