import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useCourseData } from "../../context/CourseDataContext";
import { useAuth } from "../../context/AuthContext";
import { updateEnquiry } from "../../api";

const EditEnquiryModel = ({ onClose, initialData, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      studentName: initialData?.studentName || "",
      course: initialData?.course || "",
      enquiryStatus: initialData?.enquiryStatus || "New",
      classMode: initialData?.classMode || "Online",
      contactNumber: initialData?.contactNumber || "",
    },
  });
  const modalRef = useRef();
  const { courses, statuses, classModes } = useCourseData();
  const { auth } = useAuth();

  //console.log("consloe data", initialData);

  const closeModel = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const onSubmit = async (data) => {
    const enquiryDate = { ...data, enquiryId: initialData.enquiryId };
    const userId = auth.user.userId;
    const enquiryId = initialData.enquiryId;
    console.log("userID", userId);
    console.log("enquiryId", enquiryId);
    console.log("enquiryDate", enquiryDate);
    try {
      await updateEnquiry(userId, enquiryId, data);
      onSave();
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModel}
      className="modal-overlay"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Enquiry</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-container">
                {/* Student Name */}
                <div className="form-group">
                  <label htmlFor="studentName">Student Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    {...register("studentName", {
                      required: "Student Name is required",
                    })}
                    placeholder="Enter student name"
                  />
                  {errors.studentName && (
                    <small className="text-danger">
                      {errors.studentName.message}
                    </small>
                  )}
                </div>

                {/* Course */}
                <div className="form-group">
                  <label htmlFor="course">Course</label>
                  <select
                    className="form-control"
                    id="course"
                    {...register("course", {
                      required: "Course selection is required",
                    })}
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    {courses.map((course) => (
                      <option key={course.courseId} value={course.courseName}>
                        {course.courseName}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <small className="text-danger">
                      {errors.course.message}
                    </small>
                  )}
                </div>

                {/* Status */}
                <div className="form-group">
                  <label htmlFor="enquiryStatus">Status</label>
                  <select
                    className="form-control"
                    id="enquiryStatus"
                    {...register("enquiryStatus", {
                      required: "Status is required",
                    })}
                  >
                    {statuses.map((status) => (
                      <option key={status.statusId} value={status.statusName}>
                        {status.statusName}
                      </option>
                    ))}
                  </select>
                  {errors.enquiryStatus && (
                    <small className="text-danger">
                      {errors.enquiryStatus.message}
                    </small>
                  )}
                </div>

                {/* Class Mode */}
                <div className="form-group">
                  <label htmlFor="classMode">Class Mode</label>
                  <select
                    className="form-control"
                    id="classMode"
                    {...register("classMode", {
                      required: "Class Mode is required",
                    })}
                  >
                    {classModes.map((mode) => (
                      <option key={mode.id} value={mode.classMode}>
                        {mode.classMode}
                      </option>
                    ))}
                  </select>
                  {errors.classMode && (
                    <small className="text-danger">
                      {errors.classMode.message}
                    </small>
                  )}
                </div>

                {/* Contact Number */}
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contactNumber"
                    {...register("contactNumber", {
                      required: "Contact Number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit contact number",
                      },
                    })}
                    placeholder="Enter contact number"
                  />
                  {errors.contactNumber && (
                    <small className="text-danger">
                      {errors.contactNumber.message}
                    </small>
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEnquiryModel;
