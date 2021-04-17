import React from 'react';
import './Testimonials.css';
import crown from '../../../image/crown.jpg';
import jarin from '../../../image/jarin.jpg';
import jesica from '../../../image/jesica.jpg';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : crown
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : jarin
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : jesica
    }
]

const Testimonials = () => {
    return (
       <section className="my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h1 className="text-primary">Client Says </h1>
               </div>
               <div className="card-group mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                    
                </div>
           </div>
       </section>
    );
};

export default Testimonials;