import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { unlockUserAccout } from "../api";
import { toast } from "react-toastify";

const UnlockAccount = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  // Extract email from query parameters
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email");

  const onSubmit = async (data) => {
    console.log("Form Data:", data, "Email:", email);
    try {
      const response = await unlockUserAccout({ ...data, email });
      toast.success("Account unlocked!");
      navigate("/login"); // Redirect after successful account unlock
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      console.error(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center auth-container">
      <div className="row w-100">
        <div className="col-md-4 d-flex align-items-center">
          <div className="w-100">
            <h6 className="text-center mb-4">
              Unlock your account using the details below: {email}
            </h6>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Temporary Password Field */}
              <div className="mb-3">
                <input
                  type="text"
                  id="tempPassword"
                  placeholder="Temporary Password"
                  className={`form-control ${errors.tempPassword ? "is-invalid" : ""}`}
                  {...register("tempPassword", { required: "Temporary password is required" })}
                />
                {errors.tempPassword && (
                  <div className="invalid-feedback">{errors.tempPassword.message}</div>
                )}
              </div>

              {/* New Password Field */}
              <div className="mb-3">
                <input
                  type="password"
                  id="Password"
                  placeholder="New Password"
                  className={`form-control ${errors.Password ? "is-invalid" : ""}`}
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password.message}</div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="mb-3">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-danger w-100 mb-3">
                Unlock Account
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1 className="logo-data">Connect with verified sellers</h1>
        </div>
      </div>
    </div>
  );
};

export default UnlockAccount;

