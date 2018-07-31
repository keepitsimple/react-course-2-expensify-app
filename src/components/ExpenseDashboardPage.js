import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesLSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesLSummary />
  </div>
)

export default ExpenseDashboardPage
