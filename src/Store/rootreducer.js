import { combineReducers } from "redux";

/**
 *  All of application reducers import goes here...
 */

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
