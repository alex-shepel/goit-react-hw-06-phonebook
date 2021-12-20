import Types from './types';
import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';

// reducer state template
// {
//   items: [],
//   filter: '',
// }

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case Types.SET_ITEMS:
      return action.payload;

    case Types.ADD_ITEM:
      const newContact = {
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      };
      return [...state, newContact];

    case Types.REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case Types.SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
