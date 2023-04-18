import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children
    }


    return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default PrivateProvider;