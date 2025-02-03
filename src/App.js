import logo from './logo.svg';
import './App.css';
import { GetAllStudents } from './components/GetAllStudents';
import { AddStudent } from './components/AddStudent';

function App() {
  return (
    <div className="App">
     <GetAllStudents/>
     <AddStudent/>
    </div>
  );
}

export default App;
