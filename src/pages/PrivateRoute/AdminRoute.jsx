import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAdmin from '../../hooks/useAdmin';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const [user, loading] = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user && isAdmin){
        return children
    }

    return (
        <Navigate to={'/login'}>
            
        </Navigate>
    );
};

export default AdminRoute;