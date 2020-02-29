import { REGISTER_USER, SIGN_OUT } from '../types';
import { LOGIN_USER } from '../types';

const initialState = {
  allUsers: [{ email: 'admin@gmail.com', password: 'admin' }],
  isLogged: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogged: true
      };
    case REGISTER_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload]
      };
    case SIGN_OUT:
      return {
        ...state,
        isLogged: false
      };
    default:
      return state;
  }
};
