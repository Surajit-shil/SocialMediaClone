import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Posts from "../../components/posts/Posts"
import Post from "../posts/post";
function Profile(){
    return(
        <div className="profile">
            <div className="images">
            <img src='https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className="bg_pic"></img>
            <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className='profile_pic'></img>
            </div>
            <div className="profileContainer">
                <div className="userInfo">
                    <span>Jane Doe</span>
                    <div className="left">
                        <a href='https://www.linkedin.com' target="_blank" style={{textDecoration:'none'}}><LinkedInIcon/></a>
                        <a href='https://www.instragram.com' target="_blank" style={{color:'none'}}><InstagramIcon/></a>
                        <a href='https://www.facebook.com' target="_blank" style={{color:'none'}}><FacebookTwoToneIcon/></a>
                    </div>
                    <div className="center">
                        <div className="items">
                        <PlaceIcon/>USA
                        </div>
                        <div className="items">
                        <LanguageIcon/>Lama.dev
                        </div>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon style={{cursor:'pointer'}}/>
                        <MoreVertIcon style={{cursor:'pointer'}}/>
                    </div>
                </div>
                <Post/>
            </div>
        </div>
    )
}

export default Profile