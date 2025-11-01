import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import useUserAuth from "../../hooks/useUserAuth.jsx"
import { addThousandsSeparator } from '../../utils/helper.js';
import InfoCard from '../../components/cards/InfoCard.jsx';
import axiosInstance from '../../utils/axiosInstance.js';
import { API_PATHS } from '../../utils/apiPaths.js';
import {IoMdCard }from "react-icons/io"
import RecentTransactions from '../../components/dashboard/RecentTransactions.jsx';
import{LuHandCoins , LuWalletMinimal} from "react-icons/lu"

export default function Home() {

    useUserAuth();
    const navigate = useNavigate();
    const [dashboardData , setDashboardData] = useState(null);
    const [loading , setLoading] = useState(false);
    
    
    const fetchDashboardData = async () =>{
      if(loading ) return ;
      setLoading(true);

      try{
        const response = await axiosInstance.get(
          `${API_PATHS.DASHBOARD.GET_DATA}`
        );

        if(response.data){
          setDashboardData(response.data);
        }
      }catch(error){
        console.log("Something went wrong.Please Try again" , error);
      }finally{
        setLoading(false);
      }
    }

    useEffect(()=>{
      fetchDashboardData();
      return () =>{};
    },[])
  return (
    <DashboardLayout activeMenu="Dashboard">
    <div className=' my-5 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <InfoCard icon={<IoMdCard/>}
        label="Total balance"
        value = {addThousandsSeparator(dashboardData?.totalBalance || 0)}
        color = "bg-primary"
        />

        <InfoCard icon={<LuWalletMinimal/>}
        label="Total Income"
        value = {addThousandsSeparator(dashboardData?.totalIncome || 0)}
        color = "bg-orange-500"
        />

        <InfoCard icon={<LuHandCoins/>}
        label="Total Expense"
        value = {addThousandsSeparator(dashboardData?.totalExpense || 0)}
        color = "bg-red-500"
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        <RecentTransactions 
        transactions ={dashboardData?.recentTransactions}
        onseeMore ={()=> navigate("/expenses")}
        />

      </div>
     </div>
    </DashboardLayout>
  )
}