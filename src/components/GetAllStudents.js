import { useState } from "react"
import { useEffect } from "react"
import { getAllStudents } from "../api/studentsService"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from "react-router-dom"
export const GetAllStudents=({onEdit,onDelete})=>{
    const [students,setStudents]=useState([])


    const  fetchStudents=async()=>{
        const data=await getAllStudents()
        setStudents(data)
    }

    useEffect( ()=>{
        fetchStudents()
    },[] )

const handleDelete=async(id)=>{
    if(window.confirm("Etes vous sur de supprimer cet etudiant?")){
        await onDelete(id)
        fetchStudents()

    }

}
const navigate=useNavigate()

   return(
    <>
    <div className="container mt-4">
        <Link to="/addStudent" className="btn btn-warning" >Ajouter un etudiant</Link>
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
                            {/* <button onClick={()=>{onEdit(student)}} className="btn btn-primary btn-sm me-2">Éditer</button> */}
                         
                            <button onClick={()=>{navigate(`/editStudent/${student._id}`)}} className="btn btn-primary btn-sm me-2">Éditer</button>
                      
                        </td>
                        <td>
                            <button onClick={()=>{handleDelete(student._id)}} className="btn btn-primary btn-sm me-2">Supprimer</button>
                         
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
   )
}