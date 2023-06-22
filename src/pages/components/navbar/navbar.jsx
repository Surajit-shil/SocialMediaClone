import './navbar.scss'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from '../../../Context/Darkmode';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Auth';
import { Navigate ,Link, useNavigate} from 'react-router-dom';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
function Navbar(){
    const navigate=useNavigate();
    const {toggle,darkMode}=useContext(DarkModeContext)
    const {currUser}=useContext(AuthContext)
    const handleClick=()=>{
       localStorage.setItem('accept',false)
       navigate("/exit")
    }
    return(
        <>
        <div className='navbar'>
            <div className="left">
            <Link to='/home' style={{textDecoration:'none'}}><HomeTwoToneIcon  style={{cursor:'pointer'}}/></Link>
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle} style={{cursor:'pointer'}}/> :<DarkModeOutlinedIcon onClick={toggle} style={{cursor:'pointer'}} />}
        <GridViewOutlinedIcon/>
            </div>
            <div className="mid">
            <SearchOutlinedIcon/>
            <input placeholder='search...'></input>
            </div>
            <div className="right">
                <NotificationsOutlinedIcon/>
                <EmailOutlinedIcon/>
                <PersonOutlinedIcon/>
                <div className='dp'>
                    <Link to='/profile' style={{textDecoration:'none'}}>
                    <img src={currUser.profilePic} alt='no image'></img>
                    </Link>
                    <span>{currUser.username}</span>
                </div>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
        </>
    )
}

export default Navbar