import { LOGIN_USER, REGISTER_USER, SIGN_OUT } from '../types';

export const loginUser = () => {
  return {
    type: LOGIN_USER
  };
};

export const registerUser = ({ email, password }) => {
  return {
    type: REGISTER_USER,
    payload: { email, password }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
