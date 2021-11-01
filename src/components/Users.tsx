import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/usersAction";
import { RootState } from "../states/rootState";
import { UsersState } from "../states/usersState";

export const Users: FC = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector<RootState, UsersState>(
    (rootState) => rootState.usersState
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); // ****

  return (
    <div>
      {isLoading
        ? "Loading"
        : users.map((user) => <li key={user.id}>{user.name}</li>)}
    </div>
  );
};
