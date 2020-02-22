import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const Publishable_key = "pk_test_QyjNQCgLdMvp7a6uJ6eIuoY600y3p5liFJ";

    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }
        
    return (
        <StripeCheckout 
            label='Pay Now'
            name='SNOW CLOTHING'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={Publishable_key}
            />
    );
}

export default StripeCheckoutButton;
