import './posts.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comment from '../comments/comment';
function Posts({post}){
    const [liked,setLiked]=useState(false);
    const [showComment,setShowComment]=useState(false)
    const [likes,setLikes]=useState(12);
    return(
        <div className="post">
            <div className="user">
                <div className="left">
                <img src={post.profilePic}></img>
                <Link to='/profile' style={{textDecoration:'none',color:'inherit'}}><span>{post.name}</span></Link>
                <p>a few seconds ago</p>
                </div>
                <div className="right">
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="content">
                <span>{post.desc}</span>
                <img src={post.img}></img>
            </div>
            <div className="info">
            <div className="item" onClick={()=>{setLikes(!liked ? likes+1:likes-1)
                setLiked(!liked)}}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {likes} Likes
          </div>
          <div className="item" onClick={()=>{setShowComment(!showComment)}}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {/* <div className="commenst"></div> */}
        {showComment && <Comment/>}
        </div>
    )
}

export default Posts