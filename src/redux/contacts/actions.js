import Types from './types';

const setItems = items => ({
  type: Types.SET_ITEMS,
  payload: items,
});

const addItem = (name, number) => ({
  type: Types.ADD_ITEM,
  payload: { name, number },
});

const removeItem = id => ({
  type: Types.REMOVE_ITEM,
  payload: id,
});

const setFilter = filter => ({
  type: Types.SET_FILTER,
  payload: filter,
});

export { setItems, addItem, removeItem, setFilter };
