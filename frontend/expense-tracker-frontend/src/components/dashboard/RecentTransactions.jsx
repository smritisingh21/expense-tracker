import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../cards/TransactionInfoCard'
import { IoMdDocument } from 'react-icons/io'

const RecentTransactions = ({transactions , onseeMore}) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Recent transactions</h5>
            <button className='card-btn' onClick={onseeMore}>
                See All <LuArrowRight className='text-base'/>
            </button>
        </div>

        <div>
            {transactions?.slice(0,5).map(() =>{
                <TransactionInfoCard
                    key={item._id}
                    title={item.type == 'expense' ? item.category:item.source}
                    icon ={item.icon}
                    date={IoMdDocument(item.date).format('DD MM YYYY')}
                    amount={item.amount}
                    type= {item.type}
                    hideDeleteBtn
                />
               
                
            })}
        </div>
    </div>
  )
}

export default RecentTransactions;