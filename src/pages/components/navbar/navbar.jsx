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
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
function Navbar(){
    const {toggle,darkMode}=useContext(DarkModeContext)
    const {currUser}=useContext(AuthContext)
    return(
        <>
        <div className='navbar'>
            <div className="left">
            <HomeTwoToneIcon/>
        {darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/> :<DarkModeOutlinedIcon onClick={toggle}/>}
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
                    <img src={currUser.profilePic} alt='no image'></img>
                    <span>{currUser.username}</span>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Navbar