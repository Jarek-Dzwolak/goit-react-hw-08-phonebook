import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../../redux/slices/contactSlicer';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(filterContacts(filterValue));
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
