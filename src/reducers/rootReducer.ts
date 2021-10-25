import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bankingReducer } from "./bankingReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer
});
