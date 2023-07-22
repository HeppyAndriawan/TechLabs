import React from 'react'
import Link from 'next/link'


function Header () {
  return (

    <Link href="/login">Log in</Link>
        
  )
}

function Nav () {
  return (
    
    <Link href="/my_account">My Account</Link>
        
  )
}
function Navi () {
  return (
    
    <Link href="/signup">Sign up</Link>
        
  )
}
 

export default function NavBar() {
  return (
   

    <div>
      <nav class="bg-gray-900">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-20 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class=" w-1/4 invert" 
          src="/images/logo192.png"/>

        </div>
        <div class="absolute right-0 hidden sm:ml-6 sm:block self-center">
          <div class="space-x-2.5 hover:space-x-8">
            <a href="my_account" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My account</a>
            <a href="login" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Log in</a>
            <a href="signup" class="bg-white text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Sign up</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          </div>
    </div>
  </div>


  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
  
      <a href="my_account" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">My account</a>
      <a href="login" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Log in</a>
      <a href="signup" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sign up</a>
    </div>
  </div>
  </nav>
  </div>
  )
}
