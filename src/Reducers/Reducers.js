import { combineReducers } from "redux";

const emailReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return action.payload;
    default:
      return state;
  }
};

const passwordReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_PASSWORD":
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_LOADING_TRUE":
      return true;
    case "SET_LOADING_FALSE":
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  email: emailReducer,
  password: passwordReducer,
  loading: loadingReducer
});
