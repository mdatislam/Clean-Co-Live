import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fatcher from './../../dataApi/Fatcher';
import axios from "axios";


const AddService = () => {
  const [imageUrl,setImageUrl]= useState("")
  const [loading,setLoading]=useState(false)
  //console.log(imageUrl)
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = async (data) => {
    const addData = {...data,
      img:imageUrl,
    };
    //console.log(addData)
    const res =  await fatcher.post("/add-service",addData)
    console.log(res);
    //console.log(data)
    reset()
    setImageUrl("")
  }
  const imageUpload = (event) =>{
    setLoading(true)
    const imageFile=event.target.files[0]
    const formData = new FormData();
    formData.set("image",imageFile)
   //console.log(formData)
   axios.post("https://api.imgbb.com/1/upload?key= 1b570ca2c45d58b767860a466c63580e",formData)
    .then((res)=>{
      setImageUrl(res.data.data.display_url)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
    })

  }
 
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="lg:h-screen flex justify-center items-center bg-accent mt-2">
      <div class="card flex-shrink-0 w-full max-w-sm h-5/6 shadow-2xl bg-base-100 mt-16">
        <div class="card-body">
        <h1 class="text-lg font-bold text-center">Add-Service</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Service Name</span>
            </label>
            <input type="text" placeholder="Service Name" class="input input-bordered"
            {...register("serviceName")} />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <input type="number" placeholder="price" class="input input-bordered"
            {...register("price")} />
          
          </div>
           <div class="form-control">
            <label htmlFor='image'
             class={loading ? "btn btn-warning loading mt-5" : "btn btn-warning mt-5"}>
             Image upload
              {/* <span class="label-text text-white"></span> */}
            </label>
            <input id='image' 
            onChange={imageUpload} type="file" placeholder="photo" 
            class="input input-bordered hidden" />
          
          </div>
          <div class="form-control mt-4">
            <button 
            type="submit"
            disabled= {!imageUrl? true:false}
            class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
     </form>
    );
};

export default AddService;