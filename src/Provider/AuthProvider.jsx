import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';


export const AuthContext = createContext(null)
 const auth = getAuth(app)


 
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true)
    const createAccount =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInAccount =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{unsubscribe()}
    },[])

    const logOut =()=>{
        return signOut(auth)
    }

    const authInfo ={
        createAccount,
        logInAccount,
        logOut,
        user ,
        loading

    }
    return (
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
    );
};

export default AuthProvider;