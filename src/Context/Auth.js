import { createContext,useState,useEffect } from "react";
export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [currUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem('user')) || null);
    
    const login=()=>{
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
    },[currUser])

   return <AuthContext.Provider value={{currUser,login}}>
    {children}
   </AuthContext.Provider>


}
