import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Moredetails() {
    const params=useParams()
    const staffs=useSelector(state=>state.loginUser)
    console.log(staffs);
    const staff=useSelector(state=>state.staffs)
    console.log(staff);
  return (
    <div>staffname</div>
  )
}

export default Moredetails