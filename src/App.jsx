import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import AddEnquriy from "./private/AddEnquriy";
import ViewEnquriy from "./private/ViewEnquriy";
import PrivateNavbar from "./private/PrivateNavbar";
import PrivateRoutes from "./private/PrivateRoutes";
import AuthDashBoard from "./auth/AuthDashBoard";
import ForgotPassword from "./auth/ForgetPassword";
import UnlockAccount from "./auth/UnlockAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<AuthDashBoard />}>
            <Route path="login" element={<Login />} />
            <Route path="forgetpassword" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="unlockaccount" element={<UnlockAccount />} />
          </Route>
        </Route>

        {/* Protected Routes */}
        <Route path="user" element={<PrivateRoutes />}>
          <Route path="add-enquriy" element={<AddEnquriy />} />
          <Route path="view-enquriy" element={<ViewEnquriy />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

