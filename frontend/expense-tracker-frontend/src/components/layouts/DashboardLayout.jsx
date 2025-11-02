import React,{useContext} from 'react'
import Navbar from "./Navbar.jsx"
import {UserContext} from "../../context/UserContext"
import SideMenu from "./SideMenu.jsx"

export default function DashboardLayout({children, activeMenu}){
  const {user} = useContext(UserContext);
  return (
    <div className=' min-h-screen bg-gray-50'>
        <Navbar activeMenu = {activeMenu} />
        {
          user && (
           <div className='flex w-full'>
            <div className='max-[1080px]:hidden'>
              <SideMenu activeMenu ={activeMenu}/>
            </div>
            <div className='grow mx-5'>{children}</div>
          </div>
        )}
    </div>
  )
}
