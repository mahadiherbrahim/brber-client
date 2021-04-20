import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetail.css'
const ServiceDetail = ({service}) => {

    const history = useHistory()

    const handleBook = (id) => {
        history.push(`/booking/${id}`);
    }

    return (
        <div className="col-md-4 text-center">
            <div className="service-detail">
                <img  src={service.image} alt="" />
                <h5 className="mt-3 mb-3">{service.title}</h5>
                <h4>Price : {service.price}$</h4>
                <p>{service.description}</p>
                <button className="btn btn-primary" onClick={() => handleBook(service._id)}>Book Now</button>
            </div>
        </div>
    );
};

export default ServiceDetail;