import React from "react";
import { useForm } from "react-hook-form";
import { forgetPassword } from "../api";
import { ToastContainer, toast } from "react-toastify";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.email);
    try {
      const res = await forgetPassword(data);
      console.log(res);
      console.log(res.data);
      toast.success(res.data);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage); //
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container d-flex align-items-center justify-content-center auth-container">
        <div className="row w-100">
          <div className="col-md-4 d-flex align-items-center">
            <div className="w-100">
              <h2 className="text-center mb-4">Forget Password</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Recover email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", {
                      required: "email is required",
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-danger w-100 mb-3">
                  Recover Password
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <h1 className="logo-data">Start learning with edX</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
