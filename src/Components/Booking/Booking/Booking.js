import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import CardPayment from '../CardPayment/CardPayment';
import Sidebar from '../Sidebar/Sidebar';
import './Booking.css'

const Booking = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { id } = useParams();

    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch(`https://fast-meadow-21215.herokuapp.com/booking/${id}`)
        .then(res => res.json())
        .then(data => setService(data[0]))
    },[id])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const history = useHistory();

    const [shipmentData, setShipmentData] = useState(null);

    const onSubmit = data => {
        setShipmentData(data);
    }

    const handlePaymentSuccess = paymentId =>{

        const bookingDetails = { 
            ...loggedInUser, 
            shipment: shipmentData,
            productId: id,
            productName: service.title,
            paymentId,
            orderTime: new Date() 
        }

        fetch('https://fast-meadow-21215.herokuapp.com/addBooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingDetails)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('your Booking & Payment placed successfully');
                history.push(`/bookingList`);
            })
    }

    return (
        <div>
            <div className="booking">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8">
                        <h2 className="p-5">Booking</h2>
                        <div className="bookingInformation">
                            <ul className="bookingDetails">
                                <li><strong>{service.title}</strong></li>
                                <li><strong>{service.price}</strong></li>
                            </ul>

                            <div className="booking-data col-md-6" style={{display: shipmentData ? 'none': 'block'}} >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input  defaultValue={loggedInUser.name}{...register("name")}  className="form-control" placeholder="Your Name"/> <br/>
                                    <input defaultValue={loggedInUser.email} {...register("email", { required: true })}  className="form-control" placeholder="Your Email"/> <br/>
                                    {errors.email && <span>Email field is required</span>}
                                    <input  {...register("address", { required: true })}  className="form-control" placeholder="Your Address"/> <br/>
                                    {errors.email && <span>Address field is required</span>}
                                    <input  {...register("phone", { required: true })}  className="form-control" placeholder="Your Phone"/> <br/>
                                    {errors.email && <span>Phone field is required</span>}
                                    <input type="submit" value="Booking" className="btn btn-primary"/>
                                </form>
                            </div>
                            <div className="payment-info col-md-6" style={{display: shipmentData ? 'block': 'none'}} >
                                <h6>Pay With Card</h6>
                                <p> <b>Your Service Charge {service.price}$</b> </p>
                                <CardPayment handlePayment={handlePaymentSuccess}></CardPayment>
                                {/* <button className="btn btn-primary">Booking</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;