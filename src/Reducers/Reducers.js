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

const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return action.payload
    default:
      return state;
  }
}

const merchantsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MERCHANTS":
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  email: emailReducer,
  password: passwordReducer,
  loading: loadingReducer,
  location: locationReducer,
  merchants: merchantsReducer
});
