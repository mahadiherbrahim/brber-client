import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import review1 from '../../../img/blog/comment_1.png'
import review2 from '../../../img/blog/comment_2.png'
import review3 from '../../../img/blog/comment_3.png'
import Testimonial from '../Testimonial/Testimonial';


const Testimonials = () => {

    const [testimonial,setTestimonial] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/testimonial')
        .then(res => res.json())
        .then(data => {
            setTestimonial(data)
        })
    },[])

    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Customer <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        testimonial.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;