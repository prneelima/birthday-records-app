const initialState = {
    birthdays: [],
    sortBy: '',
    sortOrder: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BIRTHDAY':
        return {
          ...state,
          birthdays: [...state.birthdays, action.payload],
        };
      case 'DELETE_BIRTHDAY':
        return {
          ...state,
          birthdays: state.birthdays.filter((birthday) => birthday.id !== action.payload),
        };
      case 'SORT_BIRTHDAYS':
        return {
          ...state,
          sortBy: action.payload.sortBy,
          sortOrder: action.payload.sortOrder,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  