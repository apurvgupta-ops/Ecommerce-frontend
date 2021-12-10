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

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" element={<Home />}/> (component is replaced with element)*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
