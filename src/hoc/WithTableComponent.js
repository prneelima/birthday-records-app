import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteBirthday, sortBirthdays } from '../actions/BirthDayAction';

const WithTableComponent = (Component) => {

    const Table = (props)=>{
        const dispatch = useDispatch();

        const handleSort = (sortByValue, sortOrderValue) => {
            dispatch(sortBirthdays(sortByValue, sortOrderValue));
        }

        const handleDelete = (id) => {
            dispatch(deleteBirthday(id));
        }

        return (
            <Component {...props} sortBirthdays={handleSort} deleteBirthday={handleDelete}/>
        )
    }
    return Table;
}

export default WithTableComponent;