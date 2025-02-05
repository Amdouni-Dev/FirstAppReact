import logo from './logo.svg';
import './App.css';
import { GetAllStudents } from './components/GetAllStudents';
import { AddStudent } from './components/AddStudent';
import { useState } from 'react';
import { EditStudent } from './components/EditStudent';
import { deleteStudent } from './api/studentsService';

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
     <GetAllStudents onEdit={setSelectedStudent} onDelete={handleDelete}/>
     {selectedStudent  ? (
      <EditStudent student={selectedStudent} />
     ):
     (<AddStudent/>)
     }  
     
    </div>
  );
}

export default App;
