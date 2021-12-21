import { setItems, addItem, removeItem, setFilter } from './actions';
import { nanoid } from 'nanoid';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// reducer state template
// {
//   items: [],
//   filter: '',
// }

const itemsReducer = createReducer([], {
  [setItems]: (_, { payload }) => payload,
  [addItem]: (state, { name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    return [...state, newContact];
  },
  [removeItem]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filterReducer = createReducer('', {
  [setFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
