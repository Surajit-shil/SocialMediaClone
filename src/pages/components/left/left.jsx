import './left.scss'
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Friends from '../assets/1.png'
import Groups from '../assets/2.png'
import Marketplace from '../assets/3.png'
import Watch from '../assets/4.png'
import Memories from '../assets/5.png'
import Events from '../assets/6.png'
import Gaming from '../assets/7.png'
import Gallery from '../assets/8.png'
import Video from '../assets/9.png'
import Messages from '../assets/10.png'
import Tutorial from '../assets/11.png'
import Courses from '../assets/12.png'
import Fundraiser from '../assets/13.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Auth';

function Left(){
    const {currUser}=useContext(AuthContext)
    return(
        <>
        <div className="leftbar">
          <div className="container">
            <div className="menu">
                <div className="user">
                <div className='dp'>
                    <img src={currUser.profilePic} alt='no image'></img>
                    <span>{currUser.username}</span>
                </div>
                </div>
            </div> 
            <div className="items">
                <img src={Friends} alt='no image'></img>
                <span>Friend</span>
            </div>  
            <div className="items">
                <img src={Groups} alt='no image'></img>
                <span>Groups</span>
            </div>
            <div className="items">
                <img src={Marketplace} alt='no image'></img>
                <span>Marketplace</span>
            </div>
            <div className="items">
                <img src={Watch} alt='no image'></img>
                <span>Watch</span>
            </div>
            <div className="items">
                <img src={Memories} alt='no image'></img>
                <span>Memories</span>
            </div>
            <hr></hr>
            <div className="items">
                <img src={Events} alt='no image'></img>
                <span>Events</span>
            </div>
            <div className="items">
                <img src={Gaming} alt='no image'></img>
                <span>Gaming</span>
            </div>
            <div className="items">
                <img src={Gallery} alt='no image'></img>
                <span>Gallery</span>
            </div>
            <div className="items">
                <img src={Video} alt='no image'></img>
                <span>Videos</span>
            </div>
            <div className="items">
                <img src={Messages} alt='no image'></img>
                <span>Messages</span>
            </div>
            <hr/>
            <div className="items">
                <img src={Fundraiser} alt='no image'></img>
                <span>Fundraiser</span>
            </div>
            <div className="items">
                <img src={Tutorial} alt='no image'></img>
                <span>Tutorial</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
            <div className="items">
                <img src={Courses} alt='no image'></img>
                <span>Courses</span>
            </div>
         </div>       
        
        </div>
        
        </>
    )
}
export default Left