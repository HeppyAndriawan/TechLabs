'use client'

import React, { Component } from 'react'
import logo from '/public/logo192.png'


const myAccount = function() {
  console.log('myAccount running...')
}

const logIn = function() {
  console.log('logIn running...')
}

const signUp = function() {
  console.log('signUp running...')
}


export default class Header extends Component {
  render() {
    return (
     <div className='header' id='header' data-id='header'>
        <img className='header-image' src={logo.src} />
        <ul className='header-buttons'>
          <li><button onClick={myAccount}>My Account</button></li>
          <li><button onClick={logIn}>Log in</button></li>
          <li><button onClick={signUp}>Sign up</button></li>
        </ul>
     </div>
    )
  }
}
