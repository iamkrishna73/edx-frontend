import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addEnquiry, getCourseName, getStatus } from "../api";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const AddEnquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState([]);
  const { auth } = useAuth();
  console.log(auth.user.userId);
  //const userId = 

  useEffect(() => {
    const fetchCourseName = async () => {
      try {
        const response = await getCourseName();
        console.log(response.data);
        setCourses(response.data); // Populate the courses state with API data
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchCourseName();
  }, []);

  useEffect(() => {
    const fetchStatusName = async () => {
      try {
        const response = await getStatus();
        console.log(response.data);
        setStatus(response.data); // Populate the courses state with API data
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchStatusName();
  }, []);

  const onSubmit = async (data) => {
    const userId = auth.user.userId;
    try {
      const res = await addEnquiry(userId, data); // API call to log in the user
      // Redirect to the user page
      console.log(res);
      console.log(res.data);
      // toast.success(res.data);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage); // Display error message to the user
    }

    console.log("Form Data: ", data);
  };

  return (
    <>
      <ToastContainer />
      <div className="container col-md-4 d-flex flex-column">
        <div className="card-header">
          <h4>Add Enquiry</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Student Name */}
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                placeholder="Student Name"
                className={`form-control ${
                  errors.studentName ? "is-invalid" : ""
                }`}
                {...register("studentName", {
                  required: "Student name is required",
                })}
              />
              {errors.studentName && (
                <div className="invalid-feedback">
                  {errors.studentName.message}
                </div>
              )}
            </div>

            {/* Contact Number */}
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Contact Number"
                id="contactNumber"
                className={`form-control ${
                  errors.contactNumber ? "is-invalid" : ""
                }`}
                {...register("contactNumber", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
              />
              {errors.contactNumber && (
                <div className="invalid-feedback">
                  {errors.contactNumber.message}
                </div>
              )}
            </div>

            {/* Class Mode */}
            <div className="mb-3">
              <label htmlFor="classMode" className="form-label">
                Class Mode
              </label>
              <select
                id="classMode"
                className={`form-control ${
                  errors.classMode ? "is-invalid" : ""
                }`}
                {...register("classMode", {
                  required: "Class mode is required",
                })}
              >
                <option value="">Select Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              {errors.classMode && (
                <div className="invalid-feedback">
                  {errors.classMode.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="course" className="form-label">
                Course
              </label>
              <select
                id="course"
                className={`form-control ${errors.course ? "is-invalid" : ""}`}
                {...register("course", { required: "Course is required" })}
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course.courseId} value={course.courseName}>
                    {course.courseName}
                  </option>
                ))}
              </select>
              {errors.course && (
                <div className="invalid-feedback">{errors.course.message}</div>
              )}
            </div>

            {/* Enquiry Status */}
            <div className="mb-3">
              <label htmlFor="enquiryStatus" className="form-label">
                Enquiry Status
              </label>
              <select
                id="enquiryStatus"
                className={`form-control ${
                  errors.enquiryStatus ? "is-invalid" : ""
                }`}
                {...register("enquiryStatus", {
                  required: "Enquiry status is required",
                })}
              >
                <option value="">Select Status</option>
                {status.map((state) => (
                  <option key={state.statusId} value={state.statusName}>
                    {state.statusName}
                  </option>
                ))}
              </select>
              {errors.enquiryStatus && (
                <div className="invalid-feedback">
                  {errors.enquiryStatus.message}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEnquiry;
