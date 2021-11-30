import { combineReducers } from "redux";
import auth from "./authReducer";
 

import register from "./RegisterReducer"

export default combineReducers({
  register,
  auth
})

