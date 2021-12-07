import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
//Instead of Switch(switch is removed from v6) we can use Routes in v6
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" element={<Home />}/> (component is replaced with element)*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
