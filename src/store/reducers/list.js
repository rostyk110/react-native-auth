import { LOAD_LIST } from '../types';

const initialState = {
  allItems: [
    { title: 'Lorem ipsum dolor sit amet' },
    { title: 'consectetur adipiscing elit' },
    { title: 'ed do eiusmod tempor' },
    { title: 'incididunt ut labore et dolore' },
    { title: 'magna aliqua' }
  ]
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIST:
      return {
        ...state,
        allItems: state.allItems
      };
    default:
      return state;
  }
};
