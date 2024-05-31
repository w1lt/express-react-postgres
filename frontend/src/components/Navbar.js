import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (loading) {
    return null;
  }

  return (
    <nav>
      {isAuthenticated ? (
        <>
          <Link to="/">Home</Link>
          {user?.role === "admin" && <Link to="/admin">Admin Panel</Link>}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
