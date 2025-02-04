import logo from './logo.svg';
import './App.css';
import { GetAllStudents } from './components/GetAllStudents';
import { AddStudent } from './components/AddStudent';
import { useState } from 'react';
import { EditStudent } from './components/EditStudent';

function App() {
const [selectedStudent,setSelectedStudent]=useState(null)



  return (
    <div className="App">
     <GetAllStudents onEdit={setSelectedStudent}/>
     {selectedStudent  ? (
      <EditStudent student={selectedStudent} />
     ):
     (<AddStudent/>)
     }  
     
    </div>
  );
}

export default App;
