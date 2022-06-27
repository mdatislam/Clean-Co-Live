
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './Components/SharedPages/NavBar/NavBar';
import { Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import RequireAuth from './Components/ProtectivePage/RequireAuth';

import { privateRoute } from './Route/PrivateRoute';
import { pablicRoutes } from './Route/PablicRoute';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
    <NavBar>
    <Routes>
   {/*  <Route path="/Home" element={<Home></Home>}></Route>
    <Route path="/Login" element={<Login></Login>}></Route> */}

    {
    pablicRoutes.map(({path,Component},index)=> 
    (<Route key={index} path={path} element={<Component/>}/>))
    }

           {/* ............. Protective Routes............. */}

    {/* <Route path="/Services" element={<RequireAuth>
        <Services />

    </RequireAuth>}/> */}

    <Route element={<RequireAuth/>}>
    {/*  <Route path="/Services" element={<Services/>}/>
     <Route path="/About" element={<About></About>}></Route> */}
     {
      privateRoute.map(({path,Component},index)=> 
      <Route key={index} path={path} element={<Component/>} />)
     }
    </Route>
    </Routes>
    </NavBar>
    </div>
  );
}

export default App;
