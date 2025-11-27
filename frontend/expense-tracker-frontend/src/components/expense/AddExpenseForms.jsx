import React,{useState} from 'react'
import { EmojiPickerPopup } from '../layouts/EmojiPickerPopup'
import Input from '../layouts/Input.jsx'

 const AddExpenseForms = ({onAddExpense}) => {
    const [expense, setExpense] = useState({
        source : "",
        amount : "",
        date : "",
        icon: ""
    })

    const handleChange = (key , value) => 
      setExpense({...expense ,[key] : value})

  return (
    <div>
      
        <EmojiPickerPopup
        icon = {expense.icon}
        onSelect ={(selectedIcon) => handleChange("icon" , selectedIcon)}/>
        <Input
        value={expense.source}
        label="Expense Source"
        onChange={({target}) => handleChange("source" , target.value)}
        placeholder= "Freelance , Salary , etc"
        type="text" 
        />

        <Input
        value={expense.amount}
        label="Expense amount"
        onChange={({target}) => handleChange("amount" , target.value)}
        placeholder= "Amount"
        type="number"
        />

        <Input
        value={expense.date}
        label="Date"
        onChange={({target}) => handleChange("date" , target.value)}
        placeholder= " "
        type="date" 
        />

        <div className='flex justify-end mt-6'>
            <button
             type='button'
             className='add-btn add-btn-fill'
             onClick={() => onAddExpense(expense)}
            >Add Expense
            </button>
        </div>
    </div>
  )
}
export default AddExpenseForms;