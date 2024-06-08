import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);
  const handleChange = e => {
    dispatch(setSearch(e.target.value.trim()));
  };

  return (
    <div className={css.searchContainer}>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={search}
        onChange={handleChange}
      ></input>
    </div>
  );
}
