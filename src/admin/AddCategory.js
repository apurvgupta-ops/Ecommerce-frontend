import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();
  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
        Go back
      </Link>
    </div>
  );

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //BACKEND REQ FIRED
    createCategory(user._id, token, { name }).then((data) => {
      if (data?.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h6 className="text-success">Category created successfully</h6>;
    }
  };

  const errorMessage = () => {
    if (error) {
      return <h4 className="text-danger">Category creation failed</h4>;
    }
  };

  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-group">
          <p className="lead text-white">
            {" "}
            Enter your category
            <input
              type="text"
              className="form-control my-3"
              autoFocus
              required
              placeholder="For Ex.summer"
              onChange={handleChange}
              value={name}
            />
            <button onClick={onSubmit} className="btn btn-outline-success">
              Create Category
            </button>
          </p>
        </div>
      </form>
    );
  };

  return (
    <Base
      title="Add Category"
      description="Add your personal category here"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {errorMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
