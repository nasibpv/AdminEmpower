import { React,  useState,useEffect } from 'react'
import '../style/Logins.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
// import Admin from './Admin';
// import axios from 'axios';
import {users} from '../Actions/restAction';
import { useDispatch, useSelector } from 'react-redux';


function Logins() {
  const [userEmail,setEmail]=useState('')
  const [psw,setpsw]=useState('')
  // const [usertype,setusertype]=useState('')
  // const [userDetails,setUsersdetails]=useState('')
  const location= useNavigate()
  
  const result=useSelector(state=>state.loginUser)

//   const fetchData=async ()=>{
//     const result=await axios.get('http://localhost:8000/login/')
// //    //
//    console.log(result.data);
//     setusertype(result.data)
// }
  //
  const dispatch=useDispatch()
  
  // const product= products.find(item=>item.id==params.id)
//  const  userlogin =async(e)=>{
//   // e.preventDefault()
//     const body ={
//       userid:userid,
//       password:psw
//     }
    
//     // console.log(result.data);
    
//     if(result.data.status==true){
//     setusertype(result.data.currentusertype)
//     localStorage.setItem("token",JSON.stringify(result.data.token))
//     localStorage.setItem("usertype",JSON.stringify(result.data.currentusertype))
//     alert(result.data.message)
//       location('/')  
//     }
//     else if(result.data.status==false){
//       // console.log(result);
//       alert("incurrect userid or password ")
//       alert(result.error.message)
//     }
//     // console.log(usertype);
//   }
  // 


const Login=async(e)=>{
  e.preventDefault()
  result.loginUser?.map(item=>{
    // alert('ok')
    // console.log(item.password);

    if(item.email===userEmail ){
        
          
          // break
          if(item.password===psw){
            localStorage.setItem("token",JSON.stringify(item.usertype))
          alert('ok')
          location('/')
          return
          }
          else{
            alert('incorrect psw')
          }
    }
    
    else {
      // alert('noo')
    }
  })
}


  useEffect(()=>{
    dispatch(users())
  },[])
// setUsersdetails(result.loginUser)
//  console.log(result.loginUser);
  return (
    <div className='main'>
          <div className=' cont container w-75 row'>
            <div className='col-6 left-side'>
              {/* <img src='https://i.postimg.cc/MK2dk6WL/download.jpg'/> */}
              <h1 className='heed'>Luminar TechnoLab</h1>
            </div>
            <div className='col-6 border  right-side '>
            <h1 className='title'>Login</h1>
            <Form>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setpsw(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        <Button variant="secondary" onClick={Login} type="button" className='mt-4'>
          Submit
        </Button>
     
    </Form>
            </div>
            </div>
      </div>

  )
}

export default Logins