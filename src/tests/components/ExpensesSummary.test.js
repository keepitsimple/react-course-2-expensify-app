import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should correctly render ExpenseSummary with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235123} />)
  expect(wrapper).toMatchSnapshot();
})
