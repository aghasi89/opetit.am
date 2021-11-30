import { combineReducers } from "redux";
import contactUs from "./contactUsReducer";
import register from "./RegisterReducer"

export default combineReducers({
  register,
  contactUs
})

