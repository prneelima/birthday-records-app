export const addBirthday = (birthday) => ({
    type: 'ADD_BIRTHDAY',
    payload: birthday,
  });
  
  export const deleteBirthday = (id) => ({
    type: 'DELETE_BIRTHDAY',
    payload: id,
  });
  
  export const sortBirthdays = (sortBy, sortOrder) => ({
    type: 'SORT_BIRTHDAYS',
    payload: {
      sortBy,
      sortOrder,
    },
  });
  