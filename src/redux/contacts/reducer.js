import { setItems, addItem, removeItem, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// reducer state template
// {
//   items: [],
//   filter: '',
// }

const itemsReducer = createReducer([], {
  [setItems]: (_, { payload }) => payload,
  [addItem]: (state, { payload }) => [...state, payload],
  [removeItem]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
