import { useContext } from "react"
import { AuthContext } from "../../../Context/Auth"
import { Navigate } from "react-router-dom"

const Protected=({children})=>{
    const {acceptStatus}=useContext(AuthContext)
    return acceptStatus ? children : <Navigate to='/login'></Navigate>
}

export default Protected