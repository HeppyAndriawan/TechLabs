import React from 'react'

export default function Hero() {
  return (
    
    <div className="relative h-screen bg-cover bg-center bg-[url('/images/hero_720.jpg')]">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold mb-4">Big things starts from small ideas.</h1>
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300" />
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-r-md hover:bg-black focus:outline-none focus:ring focus:border-blue-300">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
  