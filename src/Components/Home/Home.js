import React from "react";
import cleanGirl from "../../image/bucketgirl.png";
import About from "../About/About";
import Services from './../Services';


const Home = () => {
   
  return (
    <>
      <div class="hero mt-4 py-3 bg-accent">
        <div class="hero-content flex-col lg:flex-row">
         
          <div>
            <h6 
            data-aos="slide-up"
            data-aos-delay="10"
            data-aos-duration="400">Best Quality</h6>
            <h1
            data-aos="slide-up"
            data-aos-delay="510"
            data-aos-duration="1000"
             class="text-5xl font-bold">Professional Cleaing Service</h1>
            <p 
            data-aos="slide-up"
            data-aos-delay="810"
            data-aos-duration="1600"
            class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button 
            data-aos="fade-down-left"
            data-aos-delay="2610"
            data-aos-duration="3000"
             class="btn btn-primary">Get Started</button>
          </div>
          <img 
          data-aos="flip-right"
          data-aos-delay="10"
          data-aos-duration="1000"
          src={cleanGirl} h-full alt=" buket girl" />
        </div>
      </div>

      
      <div class="bg-base-300 rounded-2xl z-20 mt-[-50px] relative shadow-xl mb-4  w-5/6 mx-auto">
        <div class="card-body">
          <h2 class="card-title">Get Free Estimate!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs"/>
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs"/>
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs"/>
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs" />
        
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs"/>
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs"/>
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs"/>
          <input type="text" placeholder="Type here" class="input input-bordered input-sm  max-w-xs" />
          </div>
          <div class="card-actions justify-start mt-2">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Home;
