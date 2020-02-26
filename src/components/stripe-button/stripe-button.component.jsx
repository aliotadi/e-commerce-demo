import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_gJPhaPNw6J7d5QVY9JgjrtnY00Skel6FSk';

  const onToken = token => {
    console.log(token);
    alert('payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-commerce test :))"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeButton;
