import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    // Handle signup logic (e.g., API call)
    alert("Signup successful!");
    navigate("/login"); // Redirect to login page after successful signup
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        {/* Left Side: Signup Form */}
        <div className="col-md-4 d-flex align-items-center">
          <div className="w-100">
            <h2 className="text-center mb-4">Register Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
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
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Sign Up
              </button>
            </form>
            <div className="text-center mt-3">
              <p>Already have an account?</p>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-outline-secondary w-100"
              >
                Login
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

export default Signup;
