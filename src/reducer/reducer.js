//if we have multiple reducers than we can combine them into one file by this combineReducers method

import { combineReducers } from "redux";
import ImageReducer from "./ImageReducer";

const allReducers = combineReducers({
  ImageReducer,
});

export default allReducers;
