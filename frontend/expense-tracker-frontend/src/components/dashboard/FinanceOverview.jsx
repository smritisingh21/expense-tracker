import React from 'react'
import { CustomPieChart } from '../charts/CustomPieChart'


const COLORS =["#075CF5" ,"#FA2C37","#FF6900"]
 const FinanceOverview = ({totalBalance , totalIncome , totalExpense}) => {

    const balanceData =[
        {name:"totalBalance" ,amount :totalBalance},
        {name:"totalIncome" ,amount :totalIncome},
        {name:"totalExpense" ,amount :totalExpense},
    ]
    
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Financial overview</h5>
        </div>

        <CustomPieChart
        data={balanceData}
        label ='Total balance'
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
        />


    </div>
  )
}

export default FinanceOverview;
