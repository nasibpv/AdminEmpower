import {React, useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import {  Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from 'react-redux';
import {staff} from '../Actions/restAction';
import Moredetails from './Moredetails';

function Staff() {
  const [profile,setProfile]=useState([])

  const dispatch=useDispatch()
  const {staffs}=useSelector(state=>state.staffs)

  // console.log(staffs);
  useEffect(()=>{
    dispatch(staff())
    setProfile('')
  },[])

  const handleClick = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setProfile('')
    }
    setProfile('')
  }
  return (
   <>
           <div style={{display:profile==''?"":"none"}}>
      <div className='bg-light staffbox'> 
      <div className='row g-1 staffHeader'>
  <div className='col-7 p-2 ps-3 '>
          <h4 >Staff Management</h4>
  </div>  
  <div className='col-5 text-end p-2 ps-3 '>
          <Link to={'/addstudent'}><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Add Staff</Button></Link>
    
  </div>      </div>
      </div>
        <div >
        <Table striped bordered hover>
          <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Department</th>
                <th></th>
              </tr>
          </thead>
          <tbody>
           {
              staffs?.map((item,index)=>(
            <tr className='rowHover'>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.department}</td>
              <td> <Button variant="link"  onClick = {()=>setProfile(item)}>Moredetails</Button></td>
            </tr>
            
            ))
            }
            
          </tbody>
         
        </Table>
        </div>
        
      </div>
      <div>
      {profile ?                                              
            <div className = "select-option"> 
                <form style={{color:"black",padding:"15px"}}>
                  <h1 style={{textAlign:"center"}}>{profile.name}</h1>
                  <p>Name : <strong>{profile.name}</strong> </p>
                  <p>Age : <strong></strong></p>
                  <p>Department : {profile.department}</p>
                  <p>Gender : </p>
                  <p>Date of Birth : </p>
                  <p>Address : <strong>hello</strong></p>
                  <p>Place</p>
                  <p>Pin : </p>
                  <p>phone : {profile.phoneNumber}</p>
                  <p>Email : {profile.email}</p>
                  <Button style={{textAlign:"center"}} onClick={handleClick} variant="primary">Close</Button>
                </form>
              </div> 
      
              
              
              :  ' ' }
      </div>
     
   </>
    
  )
}

export default Staff