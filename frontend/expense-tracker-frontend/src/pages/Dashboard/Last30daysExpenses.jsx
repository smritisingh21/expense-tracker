import React, { useMemo } from 'react' // 👈 FIX: Changed import to use useMemo
import {prepareExpenseBarChartData} from "../../utils/helper.js"
import CustomBarChart from "../../components/charts/CustomBarChart.jsx"

export const Last30daysExpenses = ({data}) => {
    
    // FIX: Replaced useState/useEffect pattern with useMemo for stable data caching
    const chartData = useMemo(() => {
        // This calculation runs ONLY when the 'data' prop reference changes.
        return prepareExpenseBarChartData(data);
    }, [data]); // Depend only on the raw input data

  return (
    <div className='card col-span-1 '>
        <div  className='flex items-center justify-between'>
            <h5 className='text-lg'>Last 30 days expenses</h5>
        </div>

        <CustomBarChart data={chartData}/>
    </div>
  )
}