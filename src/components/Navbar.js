import {React, useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  // const [usertypes,setusertype]=useState("")

  // useEffect=()=>{
  //   // setusertype(localStorage.getItem("usertype"))
  //   // console.log(usertypes);
  // }
  return (
    <div className='navbars '>
        <Navbar bg="dark" sticky="top">
      <Navbar.Brand  className='p-2 ps-3'>Welcome Admin</Navbar.Brand>
  </Navbar>
  </div>
  )
}

export default Navbars