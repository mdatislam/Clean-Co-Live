import React from 'react';
import { Link, useNavigate,NavLink,useLocation } from "react-router-dom";
import AddAdmin from './AddAdmin';
import AddService from './AddService';

const Sidebar = ({children}) => {
    return (
        <div class="drawer drawer-mobile bg-accent mt-16">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
      {children}
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
           {/*  <!-- Sidebar content here --> */}
            <li><NavLink to="/DashBoard/AddAdmin">AddAdmin</NavLink></li>
            <li><NavLink to="/DashBoard/AddService">AddService</NavLink></li>
          
          </ul>
        
        </div>
      </div>
    );
};

export default Sidebar;