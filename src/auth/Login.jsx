import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";

const Login = ({ onNextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Handle login logic (e.g., API call)
    navigate("/user");
  };

  const handleSignUpRedirect = () => {
    onNextStep("signUp");
    navigate("/auth/signup");
  };

  return (
    <div className="col-md-4 d-flex align-items-center">
      <div className="w-100">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="text"
              id="username"
              placeholder="username"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>
           <div className="mb-3">
            <input
              type="text"
              id="password"
              placeholder="Password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "Password  is required",
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-danger w-100 mb-3">
            Login
          </button>
        </form>

        <div className="text-left">
          <button
            onClick={handleSignUpRedirect}
            className="btn btn-outline-primary signup-button"
          >
            Sign Up
          </button>
          <Link
            to="/auth/forgetpassword"
            className="forgertpassword"
            onClick={() => onNextStep("forgotPassword")}
          >
            Forget password
          </Link>
        </div>
        {/* <button type="button"  className="btn btn-outline-secondary " onClick={() => onNextStep("forgotPassword")}>
          Forgot Password
        </button>
        <button type="button" className="btn btn-outline-secondary" onClick={() => onNextStep("signUp")}>
          Sign Up
        </button> */}
      </div>
    </div>
  );
};

export default Login;
