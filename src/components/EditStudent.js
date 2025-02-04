import { useState } from "react"
import { updateStudent } from "../api/studentsService"
import 'bootstrap/dist/css/bootstrap.min.css'

export const EditStudent=({student})=>{
const [name,setName]=useState(student.name || "")
const [email,setEmail]=useState(student.email || "")
const [age,setAge]=useState(student.age || "")
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
const response =await updateStudent(student._id,updatedSt)
if(response){
    alert("Etudiant mis à jour")
    setName("")
    setEmail("")
    setAge("")
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