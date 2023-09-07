import React from 'react';
import {useDispatch} from 'react-redux';
import { addBirthday } from '../actions/BirthDayAction';

const WithForm = (Component) =>{

    const Form = (props) => {
        const dispatch = useDispatch();

        const add = (birthday) => {
            dispatch(addBirthday(birthday));
        }

        return (
            <Component addBirthday = {add} {...props} />
        )
    }
    return Form;
}

export default WithForm;