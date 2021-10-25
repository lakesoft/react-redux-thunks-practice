import { Reducer } from "react";
import { BankingAction, BankingActionKind } from "../actions/bankingAction";
import { BankingState } from "../states/bankingState";

const initialState: BankingState = { balance: 0 };

export const bankingReducer: Reducer<BankingState, BankingAction> = (
  state = initialState,
  action
): BankingState => {
  switch (action.type) {
    case BankingActionKind.Deposit:
      return { ...state, balance: state.balance + action.ammount };
    case BankingActionKind.Withdraw:
      return { ...state, balance: state.balance - action.ammount };
    default:
      return state;
  }
};
