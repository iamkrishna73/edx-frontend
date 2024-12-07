import React, { createContext, useState, useEffect, useContext } from "react";
import { getCourseName, getStatus } from "../api"; // Import your API functions

// Create a context
const CourseDataContext = createContext();

// Provider component
export const CourseDataProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [classModes] = useState([
    { id: 1, classMode: "Online" },
    { id: 2, classMode: "Offline" },
  ]);

  // Fetch courses
  useEffect(() => {
    const fetchCourseName = async () => {
      try {
        const response = await getCourseName();
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourseName();
  }, []);

  // Fetch statuses
  useEffect(() => {
    const fetchStatusName = async () => {
      try {
        const response = await getStatus();
        console.log(response.data);
        setStatuses(response.data);
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };

    fetchStatusName();
  }, []);

  return (
    <CourseDataContext.Provider value={{ courses, statuses, classModes }}>
      {children}
    </CourseDataContext.Provider>
  );
};

// Custom hook to use the context
export const useCourseData = () => useContext(CourseDataContext);
