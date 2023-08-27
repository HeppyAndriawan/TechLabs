"use client";
import React from 'react'


export default function TestSignUp () {

    return (
        <div className="flex">
            <img className= "w-1/2 h-full bg-contain" src="/images/login.jpg"/>
            <div className="w-1/2 h-fit my-auto sm:mx-auto sm:w-full sm:max-w-sm rounded-lg shadow shadow-gray-300"> 
                <form className="p-8" action="#" method="POST">
                    <div>
                        <h1 className="text-black text-3xl font-medium">Login to your account</h1>
                        <h2 className="py-3 text-gray-500 text-m">Start inspiring people with your work</h2>
                    </div>   
                    <div class="inline-block relative w-64"></div>
                    <div>
                        <label for="email" className="py-1 block text-sm font-medium text-black">Email*</label>
                        <div>
                            <input id="email" name="email" type="email" placeholder="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label for="password" className="py-1 block text-sm font-medium text-black">Password*</label>
                        <div>
                            <input id="password" name="password" type="password" placeholder="password" autocomplete="password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="py-5 text-sm font-medium text-black">
                        <a href="forgotpassword">Forgot password?</a>
                    </div>
                    <div>
                        <button type="submit" className=" mt-2 flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">Sign In</button>
                    </div>
                </form>
                <p className="mb-7 text-center text-xs text-black">
                    Don`t have an account?
                    <a href="/signup" className="text-gray-400"> Sign up </a>
                </p>
            </div>
      </div>
  );
}
