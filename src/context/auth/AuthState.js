import React, { useState } from 'react'
import authContext from './authContext';

const AuthState = (props) => {

    const [decoded, setDecoded] = useState("");

    




    return (
        <authContext.Provider value={{ decoded, setDecoded }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState