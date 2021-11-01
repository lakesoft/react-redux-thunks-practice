import { Reducer } from "react";
import { UsersAction, UsersActionKind } from "../actions/usersAction";
import { UsersState } from "../states/usersState";

const initialState: UsersState = {
  isLoading: false,
  users: [],
  errorMessage: undefined
};
export const usersReducer: Reducer<UsersState, UsersAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UsersActionKind.Request:
      return { ...state, isLoading: true };
    case UsersActionKind.Receive:
      return { ...state, isLoading: false, users: action.users! };
    case UsersActionKind.Fail:
      return {
        ...state,
        isLoading: false,
        users: [],
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
