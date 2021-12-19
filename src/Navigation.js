import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
//Instead of Switch(switch is removed from v6) we can use Routes in v6
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoute";

import Home from "./core/Home";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProduct";
import Cart from "./core/Cart";
import updateProduct from "./admin/UpdateProduct";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" element={<Home />}/> (component is replaced with element)*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute
          exact
          path="/admin/create/category"
          component={AddCategory}
        />
        <AdminRoute
          exact
          path="/admin/create/products"
          component={AddProduct}
        />
        <AdminRoute exact path="/admin/products" component={ManageProducts} />
        <AdminRoute
          exact
          path="/admin/product/update/:productId"
          component={updateProduct}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
