import { combineReducers } from "redux";
<<<<<<< HEAD
import contactUs from "./contactUsReducer";
import register from "./RegisterReducer"

export default combineReducers({
  register,
  contactUs
=======
import register from "./RegisterReducer";
import contactUs from "./contactUsReducer";
import auth from "./authReducer";
export default combineReducers({
  register,
  contactUs,
  auth
>>>>>>> dev
})

