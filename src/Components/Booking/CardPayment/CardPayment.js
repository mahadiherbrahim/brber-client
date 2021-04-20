import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';
const stripePromise = loadStripe('pk_test_51IgQHVHBW2PlQPzCa76Ih690xgTIlrNv2xeWuwTBPyOVT6dRlLBzvSIN7CshnsxRkc5EcZgp1PtvvIQyYK1eMc7q00M7gsShOL');

const CardPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment}></PaymentForm>
        </Elements>
    );
};

export default CardPayment;