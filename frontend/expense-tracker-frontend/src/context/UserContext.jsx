import React,{createContext ,useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [user , setUser ] = useState(null);

    const updateUser = (userData) =>{
        const updatedData = { ...user, ...userData };
        setUser(updatedData);
    }
    const clearUser = () =>{
        setUser(null);
    }

    return (
        <UserContext.Provider value={{updateUser , clearUser , user}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;