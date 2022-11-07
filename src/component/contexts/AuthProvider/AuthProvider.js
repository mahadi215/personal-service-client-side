import React, { Children, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({Children}) => {
    
    const authInfo = {

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {Children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;