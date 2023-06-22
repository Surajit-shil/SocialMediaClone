import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    const navigate=useNavigate();
    const clickHandle=()=>{
          localStorage.setItem('accept',true)
        navigate("/home")       
    }
    return (
        <>
            <div className="main_page">
                <div className="card">
                    <div className="left">
                        <h1>Register for free</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eligendi sunt corporis itaque accusamus quisquam cumque reiciendis obcaecati quidem ab ducimus, quas accusantium harum! Atque similique consequuntur molestiae ut, ea vero architecto quidem id fuga culpa in saepe et libero vel quasi corrupti pariatur. Magni accusamus a itaque eveniet nulla!</p>
                        <Link to='/login'><h3>Already have account?</h3></Link>
                    </div>
                    <div className="right">
                        <h2>Register</h2>
                        <form>
                            <input type='text' placeholder="Name" required></input>
                            <input type='email' placeholder="e-mail" required></input>
                            <input type='number' placeholder='mobile number'></input>
                            <input type='text' placeholder='username'></input>
                            <input type='password' placeholder='password'></input>
                            <span><input type='checkbox'></input> Remember me</span>
                            <button onClick={clickHandle}>Done</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register