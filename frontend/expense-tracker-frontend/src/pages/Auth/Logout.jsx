import React,{ useContext }  from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate} from 'react-router-dom';
import {UserContext} from "../../context/UserContext"

export default function Logout() {
    const {user , clearUser} = useContext(UserContext)
    const navigate = useNavigate();
    

     const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    }



  return (
<DashboardLayout activeMenu="Logout">
    <div className='m-20 '>
        <div className='card m-3 flex flex-col items-center justify-around'>
             <p className='m-3'>
                Are you sure you want to logout ?
            </p>
           <div className='flex flex-row items-center justify-center'>
            
            <button className='add-btn p-2 m-4' onClick={() => navigate("/dashboard")}>
                Cancel
            </button>

            <button className='add-btn p-2 m-4 ' onClick = {() => handleLogout()}>
                Yes
            </button>
           </div>
        </div>
    </div>
</DashboardLayout>
  )
}
