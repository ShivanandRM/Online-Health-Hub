import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import API from "./api";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [dashData, setDashData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("aToken");
    if (token) setAToken(token);
  }, []);

  // ADMIN LOGIN
  const loginAdmin = async (email, password) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/admin/login`,
        { email, password }
      );

      localStorage.setItem("aToken", data.token);
      setAToken(data.token);
      toast.success("Login successful");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  const logoutAdmin = () => {
    localStorage.removeItem("aToken");
    setAToken("");
  };

  // GET ALL DOCTORS
  const getAllDoctors = async () => {
    try {
      const { data } = await API.get("/api/admin/all-doctors");
      setDoctors(data.doctors);
    } catch {
      toast.error("Failed to fetch doctors");
    }
  };

  // CHANGE AVAILABILITY
  const changeAvailability = async (docId) => {
    try {
      const { data } = await API.post("/api/admin/change-availability", { docId });
      toast.success(data.message);
      getAllDoctors();
    } catch {
      toast.error("Failed to update availability");
    }
  };

  // GET APPOINTMENTS
  const getAllAppointments = async () => {
    try {
      const { data } = await API.get("/api/admin/appointments");
      setAppointments(data.appointments.reverse());
    } catch {
      toast.error("Failed to fetch appointments");
    }
  };

  // CANCEL APPOINTMENT
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await API.post("/api/admin/cancel-appointment", {
        appointmentId
      });
      toast.success(data.message);
      getAllAppointments();
    } catch {
      toast.error("Failed to cancel appointment");
    }
  };

  // DASHBOARD DATA
  const getDashData = async () => {
    try {
      const { data } = await API.get("/api/admin/dashboard");
      setDashData(data.dashData);
    } catch {
      toast.error("Failed to load dashboard");
    }
  };

  const value = {
    aToken,
    loginAdmin,
    logoutAdmin,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    getAllAppointments,
    cancelAppointment,
    dashData,
    getDashData
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
