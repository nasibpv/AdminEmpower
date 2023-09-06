import {
    FaBars,
    // FaPager,
    FaList,
    FaDashcube
}from 'react-icons/fa';
import '../style/Admin.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { React,useEffect,useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Navbar';
// import { useSelector,useDispatch } from 'react-redux';
// import { users } from '../Actions/restAction';
// import axios from 'axios';
// 



function Admin() {
    const location=useNavigate()
    // const [usertypes,setusertype]=useState('')
    // const [list,setlist]=useState(false)

    // console.log(usertypes);
    // const result=useSelector(state=>state.loginUser)
    // console.log(result);
   
    // const dispatch=useDispatch()

    const [isOpen,setIsOpen]=useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    
        const menuItem=[
        {
            path:"/",
            names:"Dashbord",
            icon:<FaDashcube/>
        },
        {
            path:"/staff",
            names:"Staff",
            icon:<FaList/>
        },
        {
            path:"/student",
            names:"Student",
            icon:<FaList/>
        },
        {
            path:"/complaint",
            names:"Complaint",
            icon:<FaList/>
        },
        {
            path:"/leave",
            names:"Leave",
            icon:<FaList/>
        },
        {
            path:"/staffAttendance",
            names:"Staff_Attendance",
            icon:<FaList/>
        },
        {
            path:"/stdAttendance",
            names:"Std_ Attendance",
            icon:<FaList/>
        }
    ]
    
function token(){
    const items = JSON.parse(localStorage.getItem('token'));
if(!items){
    // location('/')
    location('/login')
}
// else{
//     location('/login')
// }
}
    useEffect(()=>{
        token()
        // dispatch(users())
    },[])

        return (
            <div className='containe content w-100'>
                <div style={{width:isOpen? "300px":"50px"}} className='sidebar'>
                    <div  className='top_section'>
                        <h1 style={{display : isOpen? "block":"none"}}  className='logo p-1 mt-2'>Admin</h1>
                        <div style={{marginLeft: isOpen ? "100px" : "0px",padding:"5px"}} className='bars'>
                            <FaBars onClick={toggle}/>
                         </div>
                    </div>
                    {
                        menuItem.map((item,index)=>(
                            <NavLink to={item.path} key={index} className='link' activeclassName="active" >
                                <div className='icons'>{item.icon}</div>
                                <div style={{display : isOpen ? "block":"none"}} className='link_text'>{item.names}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='mains'>
                    <div className='navbars'><Navbar/></div>
                  <div className='dashboadbox border m-1 '><div className='p-2 border rounded m-2 border-3  '>
                     <Outlet/>
                     </div>
                     </div>
                </div>
            </div> 
          )

}

export default Admin