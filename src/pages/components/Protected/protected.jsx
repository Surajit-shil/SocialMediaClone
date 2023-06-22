import { useContext } from "react"
import { AuthContext } from "../../../Context/Auth"
import { Navigate } from "react-router-dom"

const Protected=({children})=>{
    const {acceptStatus}=useContext(AuthContext)
    // console.log('value of acceptStatus inside the Protected component is:',acceptStatus)
    return acceptStatus ? children : <Navigate to='/login'></Navigate>
}

export default Protected