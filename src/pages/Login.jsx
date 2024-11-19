import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Handle login logic (e.g., API call)
    navigate("/user")
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        {/* Left Side: Login Form */}
        <div className="col-md-4 d-flex align-items-center">
          <div className="w-100">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <div className="invalid-feedback">
                    {errors.username.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-danger w-100 mb-3">
                Login
              </button>
            </form>
            <div className="text-center">
              <p>Don't have an account?</p>
              <button
                onClick={handleSignUpRedirect}
                className="btn btn-outline-secondary w-100"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Edx */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1 className="logo-data">Start learning with edX</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
