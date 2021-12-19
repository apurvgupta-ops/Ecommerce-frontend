import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  addToCart = true,
  removeToCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const cardTitle = product ? product.name : "Default";
  const cardDescription = product ? product.description : "Default";
  const cardPrice = product ? product.price : "Default";
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const addProductsToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  // const removeProductToCart = () => {
  //   removeItemFromCart(product._id);
  // };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    } else {
      console.log("Redirect failed to cart");
    }
  };

  const showAddToCartBtn = (addToCart) => {
    return (
      addToCart && (
        <button
          onClick={addProductsToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveToCartBtn = (removeToCart) => {
    return (
      removeToCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          // Another way onClick={removeProductToCart}

          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        {getRedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cardDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">${cardPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCartBtn(addToCart)}</div>
          <div className="col-12">{showRemoveToCartBtn(removeToCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
