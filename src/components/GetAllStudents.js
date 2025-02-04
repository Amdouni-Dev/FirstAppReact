import { useState } from "react"
import { useEffect } from "react"
import { getAllStudents } from "../api/studentsService"
import 'bootstrap/dist/css/bootstrap.min.css'
export const GetAllStudents=({onEdit})=>{
    const [students,setStudents]=useState([])


    const  fetchStudents=async()=>{
        const data=await getAllStudents()
        setStudents(data)
    }

    useEffect( ()=>{
        fetchStudents()
    },[] )

   return(
    <>
    <div className="container mt-4">
        <h2 className="mb-3">Liste des étudiants</h2>
        <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={student._id}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.age}</td>

                        <td>
                            <button onClick={()=>{onEdit(student)}} className="btn btn-primary btn-sm me-2">Éditer</button>
                         
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
   )
}