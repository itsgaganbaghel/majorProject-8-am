import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainDataContext } from "../Contexts/MainContext";

const ProtectedRoutes = () => {

    let { loginUserData } = useContext(MainDataContext);

    if (!loginUserData?.isLogin) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;