import React, { useState } from "react";
import Login from "./Login";
import ForgotPassword from "./ForgetPassword";
import UnlockAccount from "./UnlockAccount";
import Signup from "./Signup";

const AuthDashBoard = () => {
  const [currentStep, setCurrentStep] = useState("login");
  const [email, setEmail] = useState("");

  const handleNextStep = (step, emailData) => {
    if (emailData) setEmail(emailData); // Save email for later steps
    setCurrentStep(step);
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        {/* Left Side: Login Form */}

        {currentStep === "login" && <Login onNextStep={handleNextStep} />}
        {currentStep === "forgotPassword" && (
          <ForgotPassword onNextStep={handleNextStep} />
        )}
        {currentStep === "signUp" && <Signup onNextStep={handleNextStep} />}
        {currentStep === "unlockAccount" && <UnlockAccount email={email} onNextStep={handleNextStep} />}
        {/* Right Side: Edx */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1 className="logo-data">Start learning with edX</h1>
        </div>
      </div>
    </div>
  );
};

export default AuthDashBoard;
