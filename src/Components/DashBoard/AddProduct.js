import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fatcher from '../../dataApi/Fatcher';
import cleanGirl from "../../image/bucketgirl.png";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [imageUrl, setImageUrl]= useState("")
    const [loading, setLoading]= useState(false)
   // console.log(imageUrl)

    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    const addProduct = {...data,
    image:imageUrl}

    fatcher.post("/add-products",addProduct).then((res)=>{
        console.log(res)
        toast.success(' Update successfully done',{
          position:'top-center'
        })
    })
    
    setImageUrl("")
    reset()
    //console.log(data)
};

  const handleImageUpload = event =>{
    setLoading(true)
     const imageFile = event.target.files[0]
     const formData = new FormData()
     formData.set("image",imageFile)
     axios.post("https://api.imgbb.com/1/upload?key=1b570ca2c45d58b767860a466c63580e",formData)
     .then((res)=>{
        setImageUrl(res.data.data.display_url)
        setLoading(false)
        //console.log(res)
     })

  }
    return (
        <div class="hero h-screen bg-base-200 mb-5">
  <div class=" hero-content flex-col lg:flex-row-reverse">
    
      <div>
      <img class="py-6" src={cleanGirl} h-full alt=" buket girl" />
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
      <div class="text-center">
      <h1 class="text-2xl font-bold">Add Product!</h1>
      </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Product Name" class="input input-bordered"
          {...register("Name", { required: true, maxLength: 20 })}
           />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Brand</span>
          </label>
          <input type="text" placeholder="Brand" class="input input-bordered" 
           {...register("Brand", { required: true, maxLength: 20 })}
           />
          
        </div>
        <div class="form-control">
          <label 
          htmlFor='image' class={loading ? "btn glass loading mt-5" : "btn glass mt-5"}>
            Image Upload
            {/* <span class="label-text">Brand</span> */}
          </label>
          <input 
          id='image'
          type="file" placeholder="Brand" class="input input-bordered hidden" 
           onChange={handleImageUpload}
           />
          
        </div>
        <div class="form-control mt-6">
          <button 
          type='submit'
          disabled={!imageUrl ? true : false}
          class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
    );
};

export default AddProduct;