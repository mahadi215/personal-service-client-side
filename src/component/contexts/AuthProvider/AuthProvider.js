import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword,  signInWithPopup, signOut} from 'firebase/auth';
import app from '../../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogin =(provider) =>{
            return signInWithPopup(auth, provider);
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    
    
    const authInfo = {
        googleLogin,
        signIn ,
        createUser,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;