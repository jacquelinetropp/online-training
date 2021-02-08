import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_rrFgcrDPIffSU3GW4LJwWMgK00wvUvACZn";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Online Training"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your price is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
