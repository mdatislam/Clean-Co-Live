import React from 'react';

const Login = () => {
    return (
        <div class="lg:h-screen flex justify-center items-center bg-accent mt-2">
          <div class="card flex-shrink-0 w-full max-w-sm h-5/6 shadow-2xl bg-base-100 mt-16">
            <div class="card-body">
            <h1 class="text-lg font-bold text-center">Login now!</h1>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" class="input input-bordered" />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-4">
                <button class="btn btn-primary">Login</button>
              </div>
              <div class="divider m-0 lg:m-4">OR</div>
              <button class="btn btn-outline btn-glass hover:btn-accent mb-1 lg:m-4">LOGIN WITH GOOGLE</button>
            </div>
          </div>
        </div>
       
      
    );
};

export default Login;