import React, {useState, createContext} from 'react';

export const ProvideAuth = createContext();


export const SessionHandler = ({children}) => {
    
    const [ authUser, setAuthUser ] = useState(null);

    return(

        <ProvideAuth.Provider value={[authUser, setAuthUser]}>
            {children}
        </ProvideAuth.Provider>
    )
}