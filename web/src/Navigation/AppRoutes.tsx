import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Login } from "../components/Admin/Login/Login";
import { PrivateMap } from "./PrivateMap";
import { SitMap } from "./SitMap";
import { useEffect, useState } from "react";
import { fetchUserData } from "../services/userApis/userApis";
import { UserData } from "../components/types";
import { UserRoutes } from "./UserRoutes";
export const AppRoutes = () => {
  const [userRole, setUserRole] = useState<UserData | null>(null);
  useEffect(() => {
    const fetchRole = async () => {
      const response = await fetchUserData();
      console.log(response);
      setUserRole(response);
    };
    fetchRole();
  }, []);

  const routes = userRole?.role === 'admin' ? <SitMap /> : <UserRoutes />

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateMap>
                {routes}
              </PrivateMap>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
