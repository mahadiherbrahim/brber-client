import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddTestimonial = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        const testimonialData = {
            name: data.name,
            companyName: data.companyName,
            description: data.description,
        }

        console.log(testimonialData);

        const url = `http://localhost:4000/addTestimonial`;
        fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(testimonialData),
        })
        .then(res => {
            console.log(res);
            alert('Your Testimonial Added Successfully')
        })
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <h3 className="mt-4 mb-4">Give Your Opinion</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="w-75">
                    <input {...register("name")} className="form-control" placeholder="Your Name" /> <br />
                    <input {...register("companyName", { required: true })} className="form-control" placeholder="Company Name" /> <br />
                    <input {...register("description", { required: true })} className="form-control" placeholder="Description" /> <br />
                    
                    <input type="submit" value="Add Testimonial" className="btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default AddTestimonial;