import { useState } from "react";
import { addStudent } from "../api/studentsService";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

export const AddStudent = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
const navigate=useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !age || !email) {
            setMessage("Veuillez remplir tous le champs");
            return ;
        }
        const newSt = {
            name,
            age,
            email,
        };

        try {
            const addedStudent = await addStudent(newSt)
            if (addedStudent) {
                setMessage("Student added successfully !")
                setName("")
                setEmail("")
                setAge("")
                //navigate(-1)
                navigate("/")
            }
            else {
                setMessage("Error when adding student")
            }
        } catch (error) {
            setMessage(error)

        }
    };

    return(
        <div className="container mt-4">
        <h2 className="mb-3">Ajouter un étudiant</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nom</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Entrez le nom de l'étudiant"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input
                    type="number"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Entrez l'age de l'étudiant"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez l'email de l'étudiant"
                />
            </div>

           
            <button type="submit" className="btn btn-primary">Ajouter l'étudiant</button>
        </form>
    </div>
    )
};
