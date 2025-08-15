import axios from "axios";

const BASE_URL = "https://bitesized-backend.onrender.com/api/clients"; // Change if your backend URL is different

export const fetchClients = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createClient = async (clientData) => {
  const res = await axios.post(BASE_URL, clientData);
  return res.data;
};

export const updateClient = async (id, updatedData) => {
  const res = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return res.data;
};

export const deleteClient = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
