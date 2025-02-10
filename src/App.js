import logo from './logo.svg';
import './App.css';
import { GetAllStudents } from './components/GetAllStudents';
import { AddStudent } from './components/AddStudent';
import { useState } from 'react';
import { EditStudent } from './components/EditStudent';
import { deleteStudent } from './api/studentsService';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
const [selectedStudent,setSelectedStudent]=useState(null)
const handleDelete=async(id)=>{
try {
  await deleteStudent(id)
} catch (error) {
  console.log(error)
}
}


  return (
    <div className="App">


     {/* <GetAllStudents onEdit={setSelectedStudent} onDelete={handleDelete}/> */}
     {/* {selectedStudent  ? (
      <EditStudent student={selectedStudent} />
     ):
     (<AddStudent/>)
     }   */}

<nav className="navbar navbar-light bg-light">
      <div className="container">
        <ul className="nav navbar-nav mx-auto flex-row">
        <li className="nav-item mx-3">
            <Link to="/home"  className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/"  className="nav-link">
              show All Students
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/addStudent"  className="nav-link">
              Add Students
            </Link>
          </li>
        
        
        </ul>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<GetAllStudents/>}  ></Route>
      <Route path="/addStudent" element={<AddStudent/>}  ></Route>
      <Route path="/home" element={<Home/>}  ></Route>

    </Routes>
     
    </div>
  );
}

export default App;
