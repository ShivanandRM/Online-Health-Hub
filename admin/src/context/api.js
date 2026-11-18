import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("aToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
