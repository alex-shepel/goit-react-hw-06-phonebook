import { createAction, nanoid } from '@reduxjs/toolkit';

const setItems = createAction('contacts/set_items');
const addItem = createAction('contacts/add_item', (name, number) => {
  return {
    payload: { name, number, id: nanoid() },
  };
});
const removeItem = createAction('contacts/remove_item');
const setFilter = createAction('contacts/set_filter');

export { setItems, addItem, removeItem, setFilter };
