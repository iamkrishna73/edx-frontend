import React, { useState } from "react";
import TableData from "./TableData";
import { useCourseData } from "../context/CourseDataContext";

const ViewEnquiry = () => {
  const { courses, statuses, classModes } = useCourseData();

  const [selectedCourse, setSelectedCourse] = useState(""); // State for selected course
  const [selectedStatus, setSelectedStatus] = useState(""); // State for selected status
  const [selectedClassMode, setSelectedClassMode] = useState(""); // State for selected class mode

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleClassModeChange = (e) => {
    setSelectedClassMode(e.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4>View Suppiler Enquiries</h4>
        </div>
        <div className="card-body">
          {/* Row containing all dropdowns */}
          <div className="row">
            {/* Courses Dropdown */}
            <div className="col-md-4 mb-3">
              <label htmlFor="courses" className="form-label">
              Category              </label>
              <select
                id="courses"
                className="form-control"
                value={selectedCourse}
                onChange={handleCourseChange}
              >
                <option value="">Category</option>
                {courses.map((course) => (
                  <option key={course.courseId} value={course.courseName}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </div>

            {/* Enquiry Status Dropdown */}
            <div className="col-md-4 mb-3">
              <label htmlFor="enquiryStatus" className="form-label">
                Enquiry Status
              </label>
              <select
                id="enquiryStatus"
                className="form-control"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option value="">Select Status</option>
                {statuses.map((status) => (
                  <option key={status.statusId} value={status.statusName}>
                    {status.statusName}
                  </option>
                ))}
              </select>
            </div>

            {/* Class Mode Dropdown */}
            <div className="col-md-4 mb-3">
              <label htmlFor="classMode" className="form-label">
                Class Mode
              </label>
              <select
                id="classMode"
                className="form-control"
                value={selectedClassMode}
                onChange={handleClassModeChange}
              >
                <option value="">Select Mode</option>
                {classModes.map((mode) => (
                  <option key={mode.id} value={mode.classMode}>
                    {mode.classMode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <hr />
        {/* Pass selected values to TableData */}
        <div className="card-body">
          <TableData
            selectedCourse={selectedCourse}
            selectedStatus={selectedStatus}
            selectedClassMode={selectedClassMode}
          />
        </div>
      </div>
    </div>
  );
};
export default ViewEnquiry;
