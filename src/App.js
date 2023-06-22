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
import{Navigate, Outlet, Route,Routes,withRouter,Link} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { DarkModeContext} from './Context/Darkmode'
import { AuthContext } from './Context/Auth'
import Protected from './pages/components/Protected/protected'
import Logout from './pages/logout/logout'

function App() {
  const {darkMode}=useContext(DarkModeContext)
  const {currUser}=useContext(AuthContext)
  const {acceptStatus}=useContext(AuthContext)
  console.log('App component is running and value of accepStatus is:',acceptStatus)
  const Layout=()=>{
    console.log('The layout component is running')
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

  // const Protected=({children})=>{
  //   // const {acceptStatus}=useContext(AuthContext)
  //   console.log('protected component is running and acceptStatus is:',acceptStatus)
  //       // if(!acceptStatus)
  //       //  return <Navigate to='/login'></Navigate>
  //       // else
  //        return children
  // }
  return (
    <>
    <Routes>
    <Route exact path='/' Component={Login}></Route>
    <Route path='/' element={
    <Protected>
       <Layout style={{display:'flex'}}></Layout>
    </Protected>
    }>
      <Route exact path='/' Component={Home}></Route>
      <Route path='/profile' Component={Profile}></Route>
      <Route path='/home' Component={Home}></Route>
    </Route>
    <Route path='/login' Component={Login}></Route>
    <Route path='/register' Component={Register}></Route>
    <Route path='/exit' Component={Logout}></Route>
   </Routes>
    </>
  );
}

export default App;
