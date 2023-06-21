import { createContext, useContext } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth'
// import App from '..../App'
function Login() {
    const {login}=useContext(AuthContext)
    const handleLogin=()=>{
      login();
    }
    return (
        <>
            <div className="main_page">
                <div className="card">
                    <div className="left">
                        <h1>Hello World</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eligendi sunt corporis itaque accusamus quisquam cumque reiciendis obcaecati quidem ab ducimus, quas accusantium harum! Atque similique consequuntur molestiae ut, ea vero architecto quidem id fuga culpa in saepe et libero vel quasi corrupti pariatur. Magni accusamus a itaque eveniet nulla!</p>
                        <Link to='/register'><h3>Create Account</h3></Link>
                    </div>
                    <div className="right">
                        <h2>login</h2>
                        <form>
                            <input type='text' placeholder="username"></input>
                            <input type='password' placeholder="password"></input>
                            {/* <Link to='/'><button onClick={handleLogin}>Login</button></Link> */}
                            <button onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login