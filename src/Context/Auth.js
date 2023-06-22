import { createContext,useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [currUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem('user')) || null);
    const [acceptStatus,setAcceptStatus]=useState(JSON.parse(localStorage.getItem('accept')) ||false);
    // console.log('acceptStatus inside the Auth.js',acceptStatus)
    const login=()=>{
    setAcceptStatus(true);
    setCurrentUser(
        {
        id:1,
        username:'Surajit Shil',
        profilePic:'https://static.vecteezy.com/system/resources/previews/006/541/188/original/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg'
        // profilePic:'https://static.vecteezy.com/system/resources/previews/002/406/611/original/business-man-cartoon-character-vector.jpg'
    })
    }
    useEffect(()=>{
      localStorage.setItem('user',JSON.stringify(currUser))
      localStorage.setItem('accept',acceptStatus)
    },[currUser,acceptStatus])

   return <AuthContext.Provider value={{currUser,login,acceptStatus}}>
    {children}
   </AuthContext.Provider>


}
