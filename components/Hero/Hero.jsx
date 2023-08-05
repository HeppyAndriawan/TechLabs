import React from 'react'

export default function Hero() {
  return (
    
  
    <div className="relative">
  
        <img src="/images/hero_720.jpg" className="w-full" />
        
        <h1 className="absolute font-bold text-6xl text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Big things <br /> start with small ideas.
       

        <form className="ps-14 flex items-center">   
    <label  className="sr-only">Search</label>
    <div className="relative p-4 ">
        <div className="grid justify-items-stretch ">
           
        </div>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Find style..." required/>
        <button type="button" className="  flex ">
            
        </button>
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3  text-sm font-medium text-white bg-black rounded-lg border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-0 h-4 mr-2">
        </svg>Submit
    </button>
</form>
        </h1>
    </div>
  )
}