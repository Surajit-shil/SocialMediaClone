import { useContext,useState } from 'react';
import './comment.scss'
import { AuthContext } from '../../../Context/Auth';
function Comment(){
    const {currUser}=useContext(AuthContext)
    const [newComment,setnewComment]=useState([]);
    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "John Doe",
          userId: 1,
          duration:'1 hour ago',
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "Jane Doe",
          userId: 2,
          duration:'10 min ago',
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ];
      const [totalComment,setTotalComments]=useState(comments)
      const changeHandle=(e)=>{
         setnewComment(e.target.value);
      }
      const clickHandle=()=>{
          document.getElementById('input-text').value=''
          setTotalComments([...comments,{
            id: totalComment.length+comments.length+1,
            desc:newComment,
            name: "Surajit Shil",
            userId: totalComment.length+comments.length+1,
            duration:'few secs ago',
            profilePicture:currUser.profilePic 
          }])
      }
    return(
       <div className="comments">
        <div className="write">
          <img src={currUser.profilePic}></img>
          <input type='text' placeholder='write a comment' onChange={changeHandle} id='input-text'></input>
           <button onClick={clickHandle}>Send</button>
        </div>
        {
            totalComment.map(comment=>(
              <div className="comment" key={comment.id}>
                <img src={comment.profilePicture}></img>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>{comment.duration}</span>
              </div>
            ))
        }
       </div>
    )
}

export default Comment