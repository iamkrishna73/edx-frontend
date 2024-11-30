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
    params:data
  });

}

