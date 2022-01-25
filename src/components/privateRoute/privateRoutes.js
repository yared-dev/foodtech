import {  Navigate,Outlet } from "react-router-dom";
import {selectIsAuthenticated} from '../login/loginSlice'

import React from "react";
import { useSelector } from "react-redux";


const ProtectedRoute = () => {

    const isAuth  = useSelector(selectIsAuthenticated);
    // const funciona = useSelector((state) => state.token)
    // console.log(funciona)

   return isAuth ?  <Outlet/>:<Navigate to="/login" />

};

export default ProtectedRoute;  