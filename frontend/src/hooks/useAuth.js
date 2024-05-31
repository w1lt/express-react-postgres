import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
  const [auth, setAuth] = useState({ isAuthenticated: false, isAdmin: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuth({ isAuthenticated: false, isAdmin: false });
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAuth({
          isAuthenticated: true,
          isAdmin: response.data.role === "admin", // Check for 'role'
        });
        setLoading(false);
      } catch (error) {
        console.error("Auth error:", error); // Add log
        setAuth({ isAuthenticated: false, isAdmin: false });
        setLoading(false);
      }
    };

    fetchAuthStatus();
  }, []);

  return { auth, loading };
};

export default useAuth;
