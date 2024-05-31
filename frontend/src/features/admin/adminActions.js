import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getToken = () => localStorage.getItem("token");

export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
  const token = getToken();
  const response = await axios.get("http://localhost:5000/api/admin/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

export const addUser = createAsyncThunk(
  "admin/addUser",
  async ({ username, password, role }) => {
    const token = getToken();
    const response = await axios.post(
      "http://localhost:5000/api/admin/users",
      { username, password, role },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk("admin/deleteUser", async (id) => {
  const token = getToken();
  await axios.delete(`http://localhost:5000/api/admin/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
});
