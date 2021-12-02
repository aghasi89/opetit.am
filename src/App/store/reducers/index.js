import { combineReducers } from "redux";
import register from "./RegisterReducer";
import contactUs from "./contactUsReducer";
export default combineReducers({
  register,
  contactUs
})

