import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../components/AppLayout';


const PrivateRoute = () => {
    const authorized = true;

    return authorized ?
        <AppLayout>
            <Outlet />
        </AppLayout>
        : <Navigate to="/auth/login" />;
}


export default PrivateRoute;