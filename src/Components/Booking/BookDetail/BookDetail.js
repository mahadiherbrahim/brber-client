import React, { useEffect, useState } from 'react';

const BookDetail = ({bookInfo}) => {

    const [service,setService] = useState([]);
    const productId = bookInfo.productId;
    useEffect(()=>{
        fetch(`http://localhost:4000/booking/${productId}`)
        .then(res => res.json())
        .then(data => setService(data[0]))
    },[productId])

    return (
        <div className="col-md-4 mb-5">
            <div className="service-detail">
                <img  src={service.image} alt="" />
                <h5 className="mt-3 mb-3">{service.title}</h5>
                <h4>Price : {service.price}$</h4>
                <p>{service.description}</p>
                <p><b>Booking Date : {bookInfo.orderTime}</b></p>
                <p>Payment : <b className="btn btn-outline-success">Done</b></p>
            </div>
        </div>
    );
};

export default BookDetail;