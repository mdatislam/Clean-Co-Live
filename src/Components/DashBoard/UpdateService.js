
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateService = ({update,setUpdate,refetch}) => {
   
    
    const {_id}=update
    //console.log(_id)
    const url = `http://localhost:5000/update/${_id}`
    //console.log(url)
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = async (data) => {
        const updateData= data
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.status=true){
              toast.info(" Update done Successfully",{
                position:'top-center',
                autoClose: 6000,

              })
            }
            
        }) 
        reset()
        refetch()
        setUpdate(null)
    }

    return (
        <div className='bg-accent'>
           <input type="checkbox" id="service-update" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className='bg-green-100'>
      <h1 class="text-lg font-bold text-center">Update-Service</h1>
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
           
          <div class="modal-action">
      <label for="service-update" class="btn btn-primary">Cancel</label>
      <button type='submit' className='btn btn-info' >Update</button>
    </div>
      </div>
       
          
     
     </form>
  </div>
</div> 
        </div>
    );
};

export default UpdateService;