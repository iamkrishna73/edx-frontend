import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext' // Assuming useAuth is your custom hook
import { getDashBoardData } from '../api';

const Dashboard = () => {
  const { auth } = useAuth();
  const [enquiry, setEnquiry] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      const userId = auth.user.userId;
      try {
        const response = await getDashBoardData(userId);
        console.log(response.data);
        setEnquiry(response.data); // Populate the courses state with API data
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchEnquiries();  
  }, []);

  return (
    <div className="container mt-4">
      {/* Username Heading */}
      <h1 className="mb-3">Hi {auth.user?.username || "Guest"}, </h1>

      {/* Performance Heading */}
      <h2 className="mb-4">Your Performance</h2>

      {/* Card Section */}
      <div className="row">
        {/* Total Enquiries Card */}
        <div className="col-md-4 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Enquiries</h5>
              <p className="card-text">{enquiry?.totalEnquiresCount || 0}</p>
            </div>
          </div>
        </div>

        {/* Enrolled Count Card */}
        <div className="col-md-4 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title text-success">Enrolled</h5>
              <p className="card-text text-success">{enquiry?.enrolledCount || 0}</p>
            </div>
          </div>
        </div>

        {/* Lost Enrolled Card */}
        <div className="col-md-4 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title text-danger">Lost Enquiries</h5>
              <p className="card-text text-danger">{enquiry?.lostEnquiresCount || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
