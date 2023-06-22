import { Link } from "react-router-dom"
function Logout(){
    return(
        <>
        <h1>Successfully Logout</h1>
        <Link to='/login'>Login Again</Link>
        </>
    )
}

export default Logout