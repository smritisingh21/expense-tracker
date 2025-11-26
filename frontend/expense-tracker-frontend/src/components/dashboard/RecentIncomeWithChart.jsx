import React, { useMemo } from 'react' // FIX: Imported useMemo to fix the infinite loop
import { CustomPieChart } from '../charts/CustomPieChart'

// FIX: Assuming the external helper is not needed for this simple map operation
// If complex logic is required, that logic should be memoized here.

const COLORS =["#075CF5" ,"#FA2C37","#FF6900"]

const RecentIncomeWithChart = ({data,totalIncome}) => {

    const chartData = useMemo(() => {
        if (!data || data.length === 0) {
            return [];
        }
        
        const dataArr = data.map((item) =>({
            name : item?.source || item?.category, 
            amount: item?.amount
        }));
        
        return [dataArr]; 
        
    }, [data]); 

  return (
    <div className='card'>
        <div className=''>
            <h5>Last 60 days Income</h5>
        </div>

        <CustomPieChart
            data={chartData} 
            label ='Total income'
            totalAmount={`$${totalIncome}`}
            colors={COLORS}
            showTextAnchor
       />
       
    </div>
  )
}
export default  RecentIncomeWithChart;