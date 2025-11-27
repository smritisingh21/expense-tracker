import React, { useEffect,useState } from 'react'
import useUserAuth from '../../hooks/useUserAuth';
import { ExpenseOverview } from '../../components/expense/ExpenseOverview';
import Modal from '../../components/layouts/Modal';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import AddExpenseForms from '../../components/expense/AddExpenseForms';
import {ExpenseList} from "../../components/expense/ExpenseList"
import DeleteAlert from '../../components/DeleteAlert';
import axiosInstance from '../../utils/axiosInstance';
import API_PATHS from '../../utils/apiPaths';



export default function Expense() {
  
  useUserAuth();

  const [expenseData , setExpenseData] = useState([]);
  const [loading , setLoading] = useState(false);
  const [openDeleteAlert , setOpenDeleteAlert] = useState({show :false, data: null});
  const [openAddincomeModal , setOpenAddIncomeModal] = useState(false);

//get income details
  const fetchExpenseDetails = async() =>{
      if(loading) return;
      setLoading(true);

    try{
      const response = await axiosInstance.get(`${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`)
      if(response.data){
        setExpenseData(response.data);
      }
    }catch(err){
      console.log("Could not fetch expense data.Please try again. \n" , err);
    }finally{
      setLoading(false);
    }
  }
  const AddExpenseDetails = async(expense) =>{
     const {category , amount , date , icon} = expense;
    
    //validation checks
    if(!category.trim()){
      toast.error("Category is required.");
      return;
    }
    if(!amount || isNaN(amount) || Number(amount)<=0){
      toast.error("Amount should be a valid number greater than 0.");
      return;
    }
    if(!date){
      toast.error("Date is required.");
      return;
    }
    try{
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE ,{
        amount :Number(amount) ,
        category ,
        date,
        icon,
      })

      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully.")
      fetchExpenseDetails();
    }catch(err){
    console.error( "Error adding expense: ", errorMessage);
    }
  }

  const deleteExpense = async(id) =>{
  try{
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id))

      setOpenDeleteAlert({show:false , data:null});
      toast.success("Expense removed succesfully");
      fetchExpenseDetails();

    }catch(error){
      console.error(
      "Error deleting expense: ",
      error.response?.data?.message || error.message
      )
    }
  }

  const DownloadExpenseDetails = async() =>{

  }

  useEffect(() =>{
    fetchExpenseDetails();
    return ()=>{};
  },[ ])


  return (
     <DashboardLayout activeMenu="Expense">
       <div className=' my-5 mx-auto'>
        <div className='grid grid-cols-1 gap-6'>
          <div>
            <ExpenseOverview 
            transactions ={expenseData}
            onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
         
           <ExpenseList transactions={expenseData}
            onDelete={(id) =>{setOpenDeleteAlert({show : true , data : id}) }}
            onDownload={DownloadExpenseDetails}
            />
            
        </div>


        <Modal title ='Add expense' 
        isOpen={openAddincomeModal} 
        onClose={() => setOpenAddExpenseModal(false)}>

          <AddExpenseForms onAddExpense={AddExpenseDetails} />
        </Modal>

        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({show :false ,  data: null})}
          title="Delete Income"
          >
            <DeleteAlert
            content = "Are you sure you want to delete this expense?"
            onDelete={() => deleteExpense(openDeleteAlert.data)}
            />
            
          </Modal>
        </div>
     </DashboardLayout>
  )
}
