import { createStore, combineReducers } from 'redux';
import { listReducer } from './reducers/list';
import { userReducer } from './reducers/user';

const rootReducer = combineReducers({
  list: listReducer,
  users: userReducer
});

export default createStore(rootReducer);
