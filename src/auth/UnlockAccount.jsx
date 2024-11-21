import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UnluckAccount = ({ email, onNextStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    // Handle signup logic (e.g., API call)
    //  alert("Signup successful!");
    onNextStep("login");

    navigate("/auth/login");

    //<NavLink /> // Redirect to login page after successful signup
  };

  return (
    <div className="col-md-4 d-flex align-items-center">
      <div className="w-100">
        <h6 className="text-center mb-4">
          Please check below email to Unlock the Account: {email}
        </h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="text"
              id="password"
              placeholder="temparay Password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("tempPassword", {
                required: "Temporary password is required",
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              type="text"
              id="password"
              placeholder="New Password"
              className={`form-control ${
                errors.newPassword ? "is-invalid" : ""
              }`}
              {...register("newpassword", {
                required: " New Password  is required",
              })}
            />
            {errors.newpassword && (
              <div className="invalid-feedback">
                {errors.passwordnewpassword.message}
              </div>
            )}
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="password"
              placeholder="confirm Password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              {...register("confirmPassword", {
                required: "Confirm Password Password  is required",
              })}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-danger w-100 mb-3">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnluckAccount;
