import React from "react";
import Base from "../core/Base";

const Signin = () => {
  const signInFrom = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" type="email" />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-success btn-block mt-2 ">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="Signin page" description="Welcome to signin page">
      {signInFrom()}
    </Base>
  );
};

export default Signin;
