"use client";
import React from 'react'
import Link from 'next/link'

import { useSession } from "next-auth/react";


function Navi () {
  return (
    
    <Link href="/signup"> Forgot password </Link>
        
  )
}

export default function TestSignUp () {

    return (
      <div className=" flex">
      <img className= "w-1/2   h-screen  " src="/images/signup.jpg"/>
      <div className="space-x-2.5 hover:space-x-8 absolute right-0"> 
       </div>
  <div className="w-1/2  content-center mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="px-8" action="#" method="POST">

    <div>
        <img className="sm:mx-auto  flex-1 w-64 w-40  pb-px px-6  justify-center" src="/images/logo192.png"/>
       <h1 className=" px-8 text-gray-800 text-2xl font-semibold">Join our community</h1>
       <h2 className="py-3 px-8 text-gray-500 text-sm font-medium">Start your journey with our product</h2>
       </div>   
       <div class="inline-block relative w-64"></div>
       <label class="py-3 block text-sm font-medium leading-6 text-gray-900"> Account type* </label>
       <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
         <option>Desighner</option>
         <option>Tailor</option>
        </select>
        
      <div>
      <label class="py-3 block text-sm font-medium leading-6 text-gray-900"> Name* </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
      </div>
      <div>
        <label for="email" className="py-3 block text-sm font-medium leading-6 text-gray-900">Email*</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between py-3 ">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password*</label>
          <div className="text-sm">
          
            <a href="forgotpassword" className="font-semibold text-black hover: text-black">Forgot password?</a>
           
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
      </div>
     </form>

     <p className="mt-10 text-center text-sm text-gray-500">
      Already have an account?
      <a href="#" className="font-semibold leading-6 text-black hover:text-black"> Sign in </a>
     </p>
  </div>

  </div>  
  )
}