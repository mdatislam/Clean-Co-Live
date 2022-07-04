import React from 'react';
import { useLocation,Navigate, Outlet } from 'react-router-dom';


const RequireAuth = () => {
    
    const location = useLocation()
    const user= true
    if(!user){
       return <Navigate to="/Login" state={{from:location}} replace></Navigate>
        
    }
    return <Outlet/>
   
};

export default RequireAuth;