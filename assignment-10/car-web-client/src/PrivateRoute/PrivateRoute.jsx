import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../FireBase/AuthProvider";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-24 mx-auto loadd">
        <span className="flex items-center justify-center min-h-screen bg-[#d54242] loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) return children;
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
}

export default PrivateRoute;
