import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';


const PaymentForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError,setPaymentError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState('');
  const handleSubmit = async (event) => {
      
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null)
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border p-3" />
      <button type="submit" disabled={!stripe} className="btn btn-info mt-2">
        Pay
      </button>
      {paymentError && <p className="text-danger border p-2 m-2">{paymentError}</p>}
      {paymentSuccess && <p className="text-success border p-2 m-2">Thank You ! Your Payment Successfully Included</p>}
    </form>
  );
};

export default PaymentForm;