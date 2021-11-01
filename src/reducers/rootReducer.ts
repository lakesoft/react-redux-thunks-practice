import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bankingReducer } from "./bankingReducer";
import { usersReducer } from "./usersReducer";
export const rootReducer = combineReducers({
  authState: authReducer,
  bankingState: bankingReducer,
  usersState: usersReducer
});
