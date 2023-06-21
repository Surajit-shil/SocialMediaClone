import {Link} from 'react-router-dom'
import Stories from '../stories/stories'
import Post from '../posts/post'
import './home.scss'
function Home(){
    return(
        <div className='home'>
        <Stories/>
        <Post/>
        </div>
    )
}
export default Home