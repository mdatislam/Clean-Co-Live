import React, { useEffect, useState } from 'react';
import axios from "axios";
import Service from './Service';
import fatcher from './../dataApi/Fatcher';

const Services = () => {
    const [services, setService] = useState([])

    useEffect(()=>{
       /*  axios.get("http://localhost:5000/service").then(res=>setService(res.data)) */

      /*  (async()=>{
        const res= await axios.get("http://localhost:5000/service")
        setService(res.data)

       })() */

       fatcher.get("/service").then(res=>setService(res.data))

    },[])
    //console.log(services)
    return (
        <div className='sm:container sm:mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mt-16'>
          
            {
            services.map(service => <Service
            index={service.id}
            service={service}></Service>)
            }
        
        </div>
    );
};

export default Services;