import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/actions';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
      />
    </div>
  );
};

export default Filter;
