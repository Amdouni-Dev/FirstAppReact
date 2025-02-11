import { useEffect, useState } from "react"
import { getStById, updateStudent } from "../api/studentsService"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useParams } from "react-router-dom"

export const EditStudentWithParams=()=>{
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [age,setAge]=useState("")
const navigate=useNavigate()
const {stID}=useParams()
useEffect( ()=>{
const fetchStudent=async()=>{
    try {
        const student=await getStById(stID)
        if(student){
          setName(student.name)
          setEmail(student.email)  
          setAge(student.age)  

        }
    } catch (error) {
        console.log(error.message)
    }
}
fetchStudent()

},[stID]  )

const Editsubmit=async(e)=>{
    e.preventDefault();
if(!name || !age || !email){
    alert("Veuillez remplir tous les champs")
    return ;
}
const updatedSt = {
    name:name,
    email:email,
    age:age
    
}
try {
const response =await updateStudent(stID,updatedSt)
if(response){
    alert("Etudiant mis à jour")
    setName("")
    setEmail("")
    setAge("")
    navigate(-1)
    
}
else{
    alert ("Erreur Serveur")
}
} catch (error) {
    alert(error.message)
}
}
return(<>

<div className="mt-4">
            <h2>Modifier un étudiant</h2>
            <form onSubmit={Editsubmit}>
                <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Âge</label>
                    <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e)=>{setAge(e.target.value)}}
                     
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                      
                    />
                </div>
                <button type="submit" className="btn btn-success me-2">Sauvegarder</button>
              
            </form>
        </div>
</>)
}