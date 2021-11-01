import { Dispatch } from "react";
import { User } from "../states/usersState";

export const UsersActionKind = {
  Request: "REQUEST",
  Receive: "RECEIVE",
  Fail: "FAIL"
} as const;

export type UsersAction = {
  type: typeof UsersActionKind[keyof typeof UsersActionKind];
  users?: User[];
  errorMessage?: string;
};

export const request = (): UsersAction => ({ type: UsersActionKind.Request });

export const receive = (users: User[]): UsersAction => ({
  type: UsersActionKind.Receive,
  users: users
});
export const fail = (errorMessage: string): UsersAction => ({
  type: UsersActionKind.Fail,
  errorMessage: errorMessage
});

export const fetchUsers = () => {

  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch(request());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch(receive(users));
      })
      .catch((error) => {
        dispatch(fail(error.errorMessage));
      });
  };
};
