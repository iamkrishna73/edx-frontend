import axios from "axios";
// axios.defaults.withCredentials = true;
const api_url = "http://localhost:8182/api/edx";

export async function saveUserDetails(data) {
  return await axios.post(`${api_url}/auth/register`, data);
}
export async function unlockUserAccout(data) {
  console.log(data);
  return await axios.post(`${api_url}/auth/unlock-account`, data);
}
export async function loginUser(data) {
  console.log(data);
  return await axios.post(`${api_url}/auth/login`, data);
}
export async function forgetPassword(data) {
  console.log(data);
  return await axios.get(`${api_url}/auth/forget-password`, {
    params: data,
  });
}
export async function getCourseName() {
  return await axios.get(`${api_url}/user/enquiries/course-names`);
}

export async function getStatus() {
  return await axios.get(`${api_url}/user/enquiries/status-name`);
}

export async function addEnquiry(id, data) {
  return await axios.post(`${api_url}/user/enquiries/${id}`, data);
}
export async function getDashBoardData(id) {
  return await axios.get(`${api_url}/user/enquiries/dashboard/${id}`);
}

export async function getAllEnquiries(id) {
  return await axios.get(`${api_url}/user/enquiries/${id}`);
}

export async function updateEnquiry(userId, enquiryId, enquiryDto) {
  try {
    const response = await axios.put(
      `${api_url}/user/enquiries/${userId}/${enquiryId}`,
      enquiryDto
    );
    console.log("Response:", response.data);
   // alert("Enquiry updated successfully!");
    return response.data; // If you need to handle the response further
  } catch (error) {
    console.error("Error updating enquiry:", error.response?.data || error.message);
   // alert("Failed to update enquiry. Please try again.");
    throw error; // Re-throw the error if you need to handle it elsewhere
  }
}
