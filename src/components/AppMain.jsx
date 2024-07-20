import React from 'react'
import CurrentMonthIncome from './DashBoard/CurrentMonthIncome'
import CurrentMonthExpense from './DashBoard/CurrentMonthExpense'
import RecentTransactions from './DashBoard/RecentTransactions'

const AppMain = () => {
  return (
    <div className='w-full h-full border border-[#6C7173] rounded-lg flex justify-between'>
      <CurrentMonthIncome />
      <CurrentMonthExpense />
      <RecentTransactions />
    </div>
  )
}

export default AppMain