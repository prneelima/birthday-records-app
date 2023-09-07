import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/BirthDayReducers';

const store = configureStore({
    reducer :{
        birthDay : reducer
    }
})

export default store;
