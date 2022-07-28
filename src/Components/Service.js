import React from 'react';

const Service = ({service}) => {
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
      </div>
      </div>  
      
</div>
            
            
        </div>
    );
};

export default Service;