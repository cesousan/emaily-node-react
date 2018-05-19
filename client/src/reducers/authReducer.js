import { FETCH_USER } from '../actions/types';

// we use a default state of null instead of {} so
// while waiting for the ajx response, the state is
// null and we don't display a specific state in components.
export default function (state = null, action) {

  switch (action.type) {
    // '||' syntax uses the fact that in js,
    // an empty string (the return value when user
    // is !authenticated) returns false.
    case FETCH_USER :
      return action.payload || false;
    default:
      return state;
  }
}
