import axios from "axios";

const AdminAPI = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

AdminAPI.interceptors.request.use((req) => {
  const token = localStorage.getItem("aToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default AdminAPI;
