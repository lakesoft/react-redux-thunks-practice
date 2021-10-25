import { Reducer } from "react";
import { AuthAction, AuthActionKind } from "../actions/authAction";
import { AuthState } from "../states/authState";

const initialState: AuthState = {
  isLoggedIn: false
};
export const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action
): AuthState => {
  switch (action.type) {
    case AuthActionKind.ToggleLogin:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
