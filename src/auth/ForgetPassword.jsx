import React from "react";
import { useForm } from "react-hook-form";

function ForgotPassword({ onNextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // try {
    //   await axios.post('/api/forgot-password', data); // Replace with backend API
    //   alert('Recovery email sent!');
      onNextStep('unlockAccount', data.email);
    // } catch (error) {
    //   console.error('Error sending recovery email:', error);
    // }
  };

  return (
    <div className="col-md-4 d-flex align-items-center">
      <div className="w-100">
        <h2 className="text-center mb-4">Forget Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              type="text"
              id="username"
              placeholder="username"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-danger w-100 mb-3">
            Recover Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
