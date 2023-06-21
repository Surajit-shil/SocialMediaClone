// import logo from './logo.svg';
// import './app.scss';
import './App.scss'
import Login from './pages/login/login'
import Home from './pages/components/home/home'
import Register from './pages/register/register'
import Right from './pages/components/right/right'
import Left from './pages/components/left/left'
import Navbar from './pages/components/navbar/navbar'
import Profile from './pages/components/profile/profile'
import{Navigate, Outlet, Route,Routes} from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext} from './Context/Darkmode'
import { AuthContext } from './Context/Auth'

function App() {
  const {darkMode}=useContext(DarkModeContext)
  const {currUser}=useContext(AuthContext)
  let accepted=true
  const Layout=()=>{
    return(
      <>
      <div className = {`theme-${darkMode ? 'dark' : 'light'}`}>
      <Navbar/>
      <div style={{display:'flex'}}>
        <Left/>
        <Outlet/>
        <Right/>
      </div>
      </div>
      </>
    )
  }
  const Protected=({children})=>{
        if(!accepted)
         return <Navigate to='/login'></Navigate>
        else
         return children
  }
  
  return (
    <>
    <Routes>
    <Route path='/' element={<Protected><Layout style={{display:'flex'}}></Layout></Protected>}>
      <Route exact path='/' Component={Home}></Route>
      <Route path='/profile' Component={Profile}></Route>
      <Route path='/home' Component={Home}></Route>
    </Route>
    <Route path='/login' Component={Login}></Route>
    <Route path='/register' Component={Register}></Route>
   </Routes>
    </>
  );
}

export default App;
