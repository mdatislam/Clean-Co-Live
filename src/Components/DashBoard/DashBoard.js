import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <Sidebar>
                <Outlet/>
        </Sidebar>
          
    );
};

export default DashBoard;