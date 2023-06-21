import { useContext } from 'react';
import './stories.scss'
import { AuthContext } from '../../../Context/Auth';
function Stories(){
    const {currUser}=useContext(AuthContext)
    const stories = [
        {
          id: 1,
          name: "Surajit Shil",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "Surajit Shil",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "Surajit Shil",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 4,
          name: "Surajit Shil",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];
    return(
        <div className='stories'>
        <div className="story">
            <img src={currUser.profilePic}></img>
            <button>+</button>
            <span>{currUser.username}</span>
        </div>
          {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
        </div>
    )
}

export default Stories