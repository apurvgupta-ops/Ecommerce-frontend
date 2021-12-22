import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { loadCart, emptyCart } from "./helper/cartHelper";
import Sc from "react-stripe-checkout";
import { API } from "../backend";

const StripCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    error: "",
    loading: false,
    success: false,
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalPrice = () => {
    let amount = 0;
    products?.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  const showPaymentBtn = () => {
    return isAuthenticated() ? (
      <Sc
        stripeKey=""
        token={makePayment}
        amount={getFinalPrice() * 100}
        name="Buy Tshirts"
        billingAddress
        shippingAddress
      >
        <button className="btn btn-success">Pay with Stripe</button>
      </Sc>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
      </Link>
    );
  };
  return (
    <div>
      <h3 className="text-white">Stripe checkout {getFinalPrice()}</h3>
      {showPaymentBtn()}
    </div>
  );
};

export default StripCheckout;
