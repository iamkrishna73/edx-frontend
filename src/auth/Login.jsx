import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const onSubmit = async (data) => {
   // console.log("Login Data:", data);

    try {
      const res = await loginUser(data); // API call to log in the user
      //console.log(res.data);
      setAuth({
        isAuthenticated: true,
        user: res.data,
      });
      // Redirect to the user page
      navigate("/user");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage); // Display error message to the user
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <>
      <ToastContainer />

      <div className="container d-flex align-items-center justify-content-center auth-container">
        <div className="row w-100">
          <div className="col-md-4 d-flex align-items-center">
            <div className="w-100">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password", {
                      required: "Password  is required",
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

              <div className="text-left signin-forgetpassword">
                <button
                  onClick={handleSignUpRedirect}
                  className="btn btn-outline-primary signup-button"
                >
                  Sign in
                </button>
                <Link
                  to="/forgetpassword"
                  className="forgertpassword"
                  // onClick={() => onNextStep("forgotPassword")}
                >
                  Forget password
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <h1 className="logo-data">Connect with verified sellers</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
