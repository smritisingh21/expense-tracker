import React, { useMemo } from 'react' // 👈 Import useMemo
import { CustomPieChart } from '../charts/CustomPieChart'


const COLORS =["#075CF5" ,"#FA2C37","#FF6900"]

 const FinanceOverview = ({totalBalance , totalIncome , totalExpense}) => {

    // FIX: Memoize the balanceData array creation.
    // The array is only recreated if one of the three dependent values changes.
    const balanceData = useMemo(() => ([
        {name:"totalBalance" ,amount :totalBalance},
        {name:"totalIncome" ,amount :totalIncome},
        {name:"totalExpense" ,amount :totalExpense},
    ]), [totalBalance, totalIncome, totalExpense]); // Dependencies are the primitive values
    
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