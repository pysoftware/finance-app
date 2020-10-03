import initialState from './defaultState';
import {MutateIsShowing, SET_IS_SHOWING} from './actions/setIsShowing';
import {MutateError, SET_ERROR} from './actions/setError';
import {MutateIncomes, SET_INCOMES} from './actions/setIncomes';
import {
  MutateIsLoadingIncomes,
  SET_IS_LOADING_INCOMES,
} from './actions/setIsLoadingIncomes';

const reducer = (
    state = initialState,
    {type, payload},
) => {
  switch (type) {
    case SET_IS_SHOWING:
      return MutateIsShowing(state, payload);
    case SET_ERROR:
      return MutateError(state, payload);
    case SET_INCOMES:
      return MutateIncomes(state, payload);
    case SET_IS_LOADING_INCOMES:
      return MutateIsLoadingIncomes(state, payload);
    default:
      return state;
  }
};

export default reducer;