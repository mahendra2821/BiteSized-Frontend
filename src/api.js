// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Endpoints
export const fetchClients = (params) => API.get("/clients", { params });
export const createClient = (data) => API.post("/clients", data);
export const updateClient = (id, data) => API.put(`/clients/${id}`, data);
export const deleteClient = (id) => API.delete(`/clients/${id}`);
