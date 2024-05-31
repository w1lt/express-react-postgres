import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  addUser,
  deleteUser,
} from "../features/admin/adminActions";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { auth, loading } = useAuth();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);
  const adminStatus = useSelector((state) => state.admin.status);
  const adminError = useSelector((state) => state.admin.error);

  useEffect(() => {
    if (!loading) {
      if (!auth.isAuthenticated) {
        navigate("/login");
      } else if (!auth.isAdmin) {
        navigate("/");
      }
    }
  }, [auth, loading, navigate]);

  useEffect(() => {
    if (adminStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [adminStatus, dispatch]);

  const handleAddUser = async () => {
    try {
      await dispatch(addUser({ username, password, role })).unwrap();
      setMessage("User added successfully");
      setUsername("");
      setPassword("");
      setRole("user");
    } catch (error) {
      setMessage(error.message || "Failed to add user");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await dispatch(deleteUser(id)).unwrap();
      setMessage("User deleted successfully");
    } catch (error) {
      setMessage("Failed to delete user");
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <p>{message}</p>
      <div>
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        <h2>Users</h2>
        {adminStatus === "loading" && <div>Loading...</div>}
        {adminStatus === "failed" && <div>{adminError}</div>}
        {adminStatus === "succeeded" && (
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
