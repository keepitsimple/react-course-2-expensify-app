import filterReducer from '../../reducers/filters';
import moment from 'moment';

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should setup default values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filterReducer({...defaultState, sortBy: 'amount'}, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'rent';
  const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text});
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment();
  const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate});
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate});
  expect(state.endDate).toEqual(endDate);
});