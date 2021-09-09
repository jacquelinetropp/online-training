import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import { Button } from "react-bootstrap";
import {addPlan} from '../../redux/user/userActions';

const StripeButton = ({ price, cartItem }) => {
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
        stripeKey={publishableKey}>
          <Button onClick={addPlan(cartItem)}>Testing</Button>
        </StripeCheckout>
    </div>
  );
};

const mapStateToProps = ({cart}) => ({
    cartItem: cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  addPlan: cartItem => dispatch(addPlan(cartItem))
  
})


export default connect(mapStateToProps, mapDispatchToProps)(StripeButton);
