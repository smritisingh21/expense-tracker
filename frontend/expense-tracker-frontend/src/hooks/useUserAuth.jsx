import React,{useContext, useEffect} from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'

const useUserAuth =() => {
    const {user , updateUser , clearUser} = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if(user) return;
        let isMounted = true;

        const fetchUserInfo = async() => {
            try{
               const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
               if(isMounted && response){
                updateUser(response.data);
               }
            }catch(err){
                console.log("Failed to fetch user info." ,err);
                if(isMounted){
                    clearUser();
                    navigate("/login");
                }
            }
        }

        fetchUserInfo();

        return() =>{
            isMounted = false;
         }
    },[updateUser , clearUser , navigate]);

   
  return (
    <div>useUserAuth</div>
  )
}

export default useUserAuth;