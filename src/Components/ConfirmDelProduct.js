import React from 'react';
import { toast } from 'react-toastify';

const ConfirmDelProduct = ({delProduct, setDelProduct,products,setProduct}) => {
   const  {_id}= delProduct
   //console.log(_id)
   const handleProductDel =id=>{
const url=`http://localhost:5000/delete-product/${id}`
fetch(url,{
    method:'DELETE'
})
.then(res => res.json())
.then(data=>{
    if(data.deletedCount>0){
toast.success("Product delete successfully")
    }
    //console.log(data)
})
const remainingProducts = products.filter( product=> product._id !== id) 
setProduct(remainingProducts)
setDelProduct(null)
   }
    return (
        <div>
<input type="checkbox" id="delProduct1" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Warning!</h3>
    <p class="py-4">Are You Confirm to Delete This Product!</p>
    <div class="modal-action">
      <label for="delProduct1" class="btn btn-primary">Cancel</label>
      <label class="btn btn-error" onClick={()=>handleProductDel(_id)}>Confirm</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmDelProduct;