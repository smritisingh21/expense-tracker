import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { IncomeOverview } from '../../components/income/IncomeOverview';
import API_PATHS from '../../utils/apiPaths.js'
import Modal from '../../components/layouts/Modal.jsx';
import { toast } from 'react-hot-toast';
import AddIncomeForms from '../../components/income/AddIncomeForms.jsx';
import axiosInstance from '../../utils/axiosInstance.js';

export default function Income() {
  const [incomeData , setIncomeData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [openDeleteAlert , setOpenDeleteAlert] = useState({show :false, data: null});
  const [openAddincomeModal , setOpenAddIncomeModal] = useState(false);

  const getAllIncomeDetails = async() =>{
    if(loading) return;
    setLoading(true);
    try{
      const response = await axiosInstance.get(`${API_PATHS.INCOME.GET_ALL_INCOME}`)
      if(response.data){
        setIncomeData(response.data);
      }
    }catch(err){
      console.log("Could not fetch income data.Please try again. \n" , err);
    }finally{
      setLoading(false);
    }
  }
  const handleAddIncomes =async(income) =>{
    const {source , amount , date , icon} = income;
    
    //validation checks
    if(!source.trim()){
      toast.error("Source is required.");
      return;
    }
    if(!amount || isNaN(amount) || Number(amount)<=0){
      toast.error("Amount should be a valid number greater than 0.");
    }
    if(!date){
      toast.error("Date is required.");
      return;
    }
    try{
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME ,{
        amount ,
        source ,
        date,
        icon,
      })
      setOpenAddIncomeModal(false);
      toast.success("Income added successfully.")
    }catch(err){
      console.err( "Error adding income: ",
        err.response?.data?.message || err.message

      )

    }
  }
  const handleDeleteIncomes =async() =>{

  }
  const handleDownloadIncomeDetails =async() =>{

  }

  useEffect(() =>{
    getAllIncomeDetails();
    return(() => {})
  },[])

  return (
     <DashboardLayout activeMenu="Income">
       <div className=' my-5 mx-auto'>
        <div className='grid grid-cols-1 gap-6'>
          <div>
            <IncomeOverview 
            transactions ={incomeData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>

        <Modal title ='add income' 
        isOpen={openAddincomeModal} 
        onClose={() => setOpenAddIncomeModal(false)}>

          <AddIncomeForms onAddIncome={handleAddIncomes}></AddIncomeForms>
        </Modal>
        </div>
     </DashboardLayout>
  )
}
