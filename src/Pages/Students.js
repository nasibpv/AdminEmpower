import {React, useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { students } from '../Actions/restAction';

function Students() {

  const dispatch=useDispatch()
  const {student}=useSelector(state=>state.students)
  // console.log(student);
  useEffect(()=>{
    dispatch(students())
  },[])

  return (
    <div>
    <div className='bg-light staffbox'> 
    <div className='row g-1 staffHeader'>
<div className='col-7 p-2 ps-3 '>
        <h4 >Student Management</h4>
</div>  
<div className='col-5 text-end p-2 ps-3 '>
        <Link ><Button className='me-3' variant="success"><i class="fa-solid fa-user-plus"></i>Add StUdent</Button></Link>
  
</div>      </div>
    </div>
      <div>
      <Table striped bordered hover>
        <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Cource</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
         {
            student?.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td><Link ><a className='moredetails'>moredetails</a></Link></td>
          </tr>
          ))
          }
        </tbody>
      </Table>
      </div>
    </div>
  )
}
export default Students