import {Coins} from '../../coin/coin.model';
import {Action, ActionReducer} from "@ngrx/store";
export const ADD_MONEY = 'ADD_MONEY';
export const addMoneyReducer: ActionReducer<Coins, Action> = (state , action:any) => {
  switch (action.type) {
    case ADD_MONEY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
