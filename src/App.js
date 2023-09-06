import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Logins from './components/Logins';
import Admin from './components/Admin';
import Staff from './Pages/Staff'
import Students from './Pages/Students';
import Dashboard from './Pages/Dashboard';
import Staffdetails from './Pages/Staffdetails';
import AddStaff from './Pages/AddStaff';
import AddStudent from './Pages/AddStudent';
import Moredetails from './Pages/Moredetails';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Logins/>} ></Route>
      <Route path='/' element={<Admin/>}>
        <Route path='' element={<Dashboard/>}></Route>
        <Route path='/student' element={<Students/>}></Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/staffdetails' element={<Staffdetails/>}></Route>
        <Route path='/addstaff' element={<AddStaff/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/moredetails/:id' element={<Moredetails/>}></Route>
      </Route>
      </Routes>
           
    </div>
  );
}

export default App;
