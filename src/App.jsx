import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AddEnquriy from "./private/AddEnquriy";
import ViewEnquriy from "./private/ViewEnquriy";
import PrivateNavbar from "./private/PrivateNavbar";
import PrivateRoutes from "./private/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="user" element={<PrivateRoutes/>}>
          <Route path="/user/add-enquriy" element={<AddEnquriy />} />
          <Route path="/user/view-enquriy" element={<ViewEnquriy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
