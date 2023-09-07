import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sortBirthdays } from '../../actions/BirthDayAction';
import FormComponent from '../baseComponents/FormComponent';
import TableComponent from '../baseComponents/TableComponent';
import '../../App.css';

function BirthdayTable() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortBirthdays('name', 'asc'));
  }, [dispatch]);  

  return (
    <div className='birthday'>
      <h1>Birthday Records</h1>
      <FormComponent />
      <TableComponent/>
    </div>
  );
}

export default BirthdayTable;
