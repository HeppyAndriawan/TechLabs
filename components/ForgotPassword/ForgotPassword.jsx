import React from 'react'

export default function ForgotPassword() {
  return (
    <div>
         <div class="flex min-h-full flex-col justify-center px-5 py-8 "> 
        
          <img className=" mx-auto h-15 w-32" src="/images/logo192.png"/>
            <h1 className=" text-center px-8 text-gray-800 text-2xl font-semibold">Forgot password</h1>
             <h2 className="text-center py-3 px-8 text-gray-500 text-sm font-medium">Please type your email</h2>
         </div> 
         <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6" action="#" method="POST">
         
          <div>
            <div class="flex items-center justify-between">
         </div>
             <label for="email" className="py-0 block text-sm font-medium leading-6 text-gray-900">Email*</label>
         </div> 
              <div className="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
         </div> 
          
          <div>
         
         <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
        
          </div>
          </form>
     
          <p className="mt-10 text-center text-sm text-gray-500">
             <a href="#" className="font-semibold leading-6 text-black hover:text-black"> Log in or Sign up</a>
         </p>
      </div> 
   </div>
   
  )
  }
