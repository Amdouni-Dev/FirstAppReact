import axios from "axios"

const API_URL="http://localhost:5000/api/students"
export const getAllStudents=async()=>{
    try {
        const response=await axios.get(API_URL)
        return response.data
    } catch (error) {
        throw error
        
    }
}
export const addStudent=async(newStudent) => {
    try {
        const response =await axios.post(API_URL,newStudent)
        return response.data
    } catch (error) {
        console.error("Erreur lors de l'ajour")
        return error.message
    }
}