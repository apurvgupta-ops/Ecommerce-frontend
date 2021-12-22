import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import StripCheckout from "./StripCheckout";

const Home = () => {
  // console.log("API IS", API);
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div>
        <h2>This Section is For all the products</h2>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              addToCart={false}
              removeToCart={true}
              setReload={setReload}
              reload={reload}
            />
          );
        })}
      </div>
    );
  };

  const loadAllCheckouts = () => {
    return (
      <div>
        <h2>This Section is For all the Checkouts</h2>
      </div>
    );
  };

  return (
    <Base title="Cart page" description="Ready for Checkout">
      <div className="row text-center m-4 p-4">
        <div className="col-6">{loadAllProducts()}</div>
        <div className="col-6">
          <StripCheckout />
        </div>
      </div>
    </Base>
  );
};

export default Home;
