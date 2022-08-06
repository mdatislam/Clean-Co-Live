import React from 'react';
import { useState } from 'react';
import ConfirmDelProduct from './ConfirmDelProduct';
import useAdmin from './../Hooks/useAdmin';

const Service = ({service,products,setProduct}) => {
    const [admin]= useAdmin()
    const [delProduct, setDelProduct]= useState("")
    //console.log(delProduct)
    const {Name,Brand,image}= service
    return (
        <div>
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="image not found" /></figure>
  <div class="card-body">
  <div className='flex flex-row justify-space'>
      <div className="flex-1">
      <h2 class="text-sm font-bold"> <span className='font-bold text-pink-400 text-base'>Name</span> : {Name}</h2>
      <h2 class="text-sm font-bold"> <span className='font-bold text-pink-400 text-base'>Brand</span> : {Brand}</h2>
      </div>
      
      {
        admin && <label for="delProduct1" class="btn modal-button btn-outline btn-error"  onClick={()=>setDelProduct(service)}>Delete</label>
      }
     
      </div>
      </div>  
</div>
       {
        delProduct && <ConfirmDelProduct
        delProduct={delProduct} setDelProduct={setDelProduct}
        products={products}
        setProduct={setProduct}
        ></ConfirmDelProduct>
       }     
            
        </div>
    );
};

export default Service;