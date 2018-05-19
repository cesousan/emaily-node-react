import axios from 'axios';
import { FETCH_USER } from './types';

// redux-thunk is intercepting the action createStore
// and passes the dispatch() function as an argument
// to the function.

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type : FETCH_USER, payload : res.data });
}

/** CAN BE COMPACTED TO :
export const fetchUser = () => async dispatch =>
dispatch({
type : FETCH_USER,
payload : (await axios.get('/api/current_user')).data
});
**/
