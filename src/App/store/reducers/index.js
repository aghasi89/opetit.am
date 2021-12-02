import { combineReducers } from "redux";
import register from "./RegisterReducer";
import contactUs from "./contactUsReducer";
import auth from "./authReducer";
export default combineReducers({
  register,
  contactUs,
  auth
})

