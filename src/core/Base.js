import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My  description",
  className = " text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />

      <div className="container-fluid">
        <div className="jumbotron  text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer  mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center">
          <h4>If you got an query!</h4>
          <button className="btn btn-warning btn-lg rounded-pill">
            Contact us
          </button>
        </div>
        <div className="container">
          <span className="text-muted">
            An Amazing <span className="text-white"> Ecommerce</span> Store
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Base;