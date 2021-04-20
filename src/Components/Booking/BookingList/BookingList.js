import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import ServiceDetail from '../../Home/ServiceDetail/ServiceDetail';
import BookDetail from '../BookDetail/BookDetail';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch(`https://fast-meadow-21215.herokuapp.com/bookingList/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                console.log(data)
            })
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <h2 className="mt-5">Your Total Booking : {booking.length}</h2>
                <h3 className="mt-3 mb-5 text-info">Here Is your Booking Item Below:</h3>
                <div className="all-booking row">
                    {
                        booking.map(book=><BookDetail bookInfo={book}></BookDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;