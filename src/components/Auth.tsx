import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../states/rootState";
import { AuthState } from "../states/authState";
import { toggleLogin } from "../actions/authAction";

export const Auth: FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector<RootState, AuthState>(
    (rootState) => rootState.auth
  );

  const loginHandler = () => {
    dispatch(toggleLogin());
  };

  return (
    <div>
      <button onClick={loginHandler}>{isLoggedIn ? "logout" : "login"}</button>
    </div>
  );
};
