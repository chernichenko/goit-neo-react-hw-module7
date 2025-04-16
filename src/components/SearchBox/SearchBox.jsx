import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={value}
      onChange={e => dispatch(changeFilter(e.target.value))}
      className={css.input}
      placeholder="Find contacts by name"
    />
  );
};

export default SearchBox;