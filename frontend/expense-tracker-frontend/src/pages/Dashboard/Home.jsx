import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import useUserAuth from "../../hooks/useUserAuth.jsx"

export default function Home() {
   useUserAuth();
  return (
    <DashboardLayout activeMenu="Dashboard">
    <div className=' my-5 mx-auto'>
      Home
     </div>
    </DashboardLayout>
  )
}