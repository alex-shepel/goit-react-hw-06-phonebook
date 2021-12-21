import { setItems, addItem, removeItem, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// reducer state template
// {
//   items: [],
//   filter: '',
// }

const itemsReducer = createReducer([], builder => {
  builder
    .addCase(setItems, (_, { payload }) => payload)
    .addCase(addItem, (state, { payload }) => [...state, payload])
    .addCase(removeItem, (state, { payload }) =>
      state.filter(item => item.id !== payload),
    );
});

const filterReducer = createReducer('', builder => {
  builder.addCase(setFilter, (_, { payload }) => payload);
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
