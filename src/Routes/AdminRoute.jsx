import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p className="text-center mt-20">Loading...</p>;

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace />;
};

export default AdminRoute;