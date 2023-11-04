import { useState } from "react";
import { useContext } from "react";
import React from "react";
export const authContext =React.createContext();
function AuthProvider({children}) {

    const [userLogin,setUserLogin]=useState(null);
    return (    

        <authContext.Provider value={{userLogin,setUserLogin}}>

{children}
        </authContext.Provider>



     );
}

export default AuthProvider;