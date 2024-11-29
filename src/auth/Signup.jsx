import React from "react";
import { useForm } from "react-hook-form";
import { redirect, useNavigate, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { saveUserDetails } from "../api";

import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();


  const onSubmit = async (data) => {
    console.log("Signup Data:", data);
    try {
      const response = await saveUserDetails(data);
      // if (!response.ok) {
      //   throw new Error(`Response status: ${response.status}`);
      // }
  
      // const json = await response.json();
      // console.log(json);  
    } catch (error) {
      const errorMessage = error.response.data.message;
      
      
      console.error(errorMessage);
     toast.error(errorMessage);
    } 
    // Handle signup logic (e.g., API call)
    //onNextStep("unlockAccount", data.email);
    //navigate("/unlockaccount");
    //  alert("Signup successful!");
    //<NavLink /> // Redirect to login page after successful signup
  };

  const handleLogin = () => {
   // onNextStep("login");
    navigate("/login");
  };
  return (
    <>
      <ToastContainer />
       <div className="container d-flex align-items-center justify-content-center auth-container">
      <div className="row w-100">
      <div className="col-md-4 d-flex align-items-center">
        <div className="w-100">
          <h2 className="text-center mb-4">Register Here:</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                id="name"
                placeholder="username"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.phoneNumber && (
                <div className="invalid-feedback">{errors.phoneNumber.message}</div>
              )}
            </div>

            <button type="submit" className="btn btn-danger w-100">
              Sign Up
            </button>
          </form>
          <div className="text-center mt-3">
            <p>Already have an account?</p>
            <button
              onClick={handleLogin}
              className="btn btn-outline-secondary w-100"
            >
              Login
            </button>
          </div>
        </div>
      </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1 className="logo-data">Start learning with edX</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
