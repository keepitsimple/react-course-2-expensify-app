import expensesReducer from '../../reducers/expenses';
import expenses from "../fixtures/expenses";

test('should set default state', () => {
  expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
});

test('should add expense', () => {
  const expense = {
    id: '4',
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };

  const state = expensesReducer(undefined, { type: 'ADD_EXPENSE', expense });
  expect(state).toContainEqual({ ...expense, id: expect.any(String) });
});

test('should remove expense by id', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
  expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should not remove if id not found', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
  const note = 'My test note';
  const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: { note } });
  expect(state[1].note).toBe(note);
});


test('should not edit expense if expense not found', () => {
  const note = 'My test note';
  const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '-1', updates: { note } });
  expect(state).toEqual(expenses);
});