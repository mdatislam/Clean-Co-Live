import React, { useEffect, useState } from 'react';
import axios from "axios";
import fatcher from '../../dataApi/Fatcher';
import UpdateService from './UpdateService';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const ServiceList = () => {
    //const [services, setService]= useState([])
    const [update, setUpdate]= useState()
   // console.log(update)
     /* useEffect(()=>{
        fatcher.get('/services').then((res)=>{
            setService(res.data)
            //console.log(res.data)
        })
    },[])  */

    const { data:services, isLoading,refetch} = useQuery(["list"],()=>
    fetch(`http://localhost:5000/services`).then(res=> res.json()))

   /*  const { isLoading, data: services,refetch } = useQuery(['available'], () =>
    fetch(`http://localhost:5000/services`).then((res) =>
      res.json())) */
    
if(isLoading) return "Loading...."


    const handleDelete = id =>{
        console.log(id)
        const proceed = window.confirm("R U sure to delete")
        if(proceed){
            const url = `http://localhost:5000/delete-service/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res=> res.json())
            .then(data=>{
                if(data.deletedCount>0){
                  // const remaining = services.filter(service=> service._id !== id)
                  // setService(remaining)
                  toast.success("Service have been Delete successfully ")
                   refetch()
                }
            })
        }
    }

    
    return (
        <>
        <div class="overflow-x-auto w-full">
  <table class="table w-full">
   {/*  <!-- head --> */}
    <thead>
      <tr>
       {/*  <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th> */}
        <th> 
            <label>
            S/N
          </label>
          </th>
        <th>Image</th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {/*  <!-- row 1 --> */}
     {
        services.map((service,index)=>
      <tr>
      
        <td>
          <p class="btn modal-button btn-square">{index+1}</p>
        </td>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={service.img} />
              </div>
            </div>
            {/* <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div> */}
          </div>
        </td>
        <td>
          {service.serviceName}
          
        </td>
        <td>{service.price}</td>
       
        <td>
           
        <label for="service-update"  onClick={()=> setUpdate(service)} class="btn modal-button btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
</svg>
</label>
   <button 
        onClick={()=>handleDelete(service._id)}
        class="btn btn-circle">

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
</button>
     </td>
      </tr>
      
     )
    }
    </tbody>
  </table>

</div>
{
  update && <UpdateService
  update={update} setUpdate={setUpdate} refetch={refetch}
  ></UpdateService>
}  

</>
    );
};

export default ServiceList;