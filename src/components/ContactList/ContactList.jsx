import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from 'redux/contacts/actions';
import { useEffect } from 'react';
import * as storage from 'services/local-storage';
import { setItems } from 'redux/contacts/actions';

const INITIAL_ITEMS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = storage.get('items');
    dispatch(setItems(items?.length ? items : INITIAL_ITEMS));
  }, [dispatch]);

  useEffect(() => {
    storage.set('items', items);
  }, [items]);

  return (
    <ul className={s.list}>
      {items
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.entry}>
              <span>{name}</span>
              <span className={s.number}>{number}</span>
            </p>
            <button type="button" onClick={() => dispatch(removeItem(id))}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
