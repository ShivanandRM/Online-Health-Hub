import axios from "axios";

const DoctorAPI = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

DoctorAPI.interceptors.request.use((req) => {
  const token = localStorage.getItem("dToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default DoctorAPI;
