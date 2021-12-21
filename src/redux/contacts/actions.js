import { createAction } from '@reduxjs/toolkit';

export const setItems = createAction('contacts/set_items');
export const addItem = createAction('contacts/add_item');
export const removeItem = createAction('contacts/remove_item');
export const setFilter = createAction('contacts/set_filter');
