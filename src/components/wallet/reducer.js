import initialState from './defaultState';
import {MutateIsLoading, SET_IS_LOADING} from './actions/setIsLoading';
import {MutateError, SET_ERROR} from './actions/setError';
import {
  MutateLossesPerMonth,
  SET_LOSSES_PER_MONTH,
} from './actions/setLossesPerMonth';
import {MutateTotalSum, SET_TOTAL_SUM} from './actions/setTotalSum';
import {
  MutateIncomesPerMonth,
  SET_INCOMES_PER_MONTH,
} from './actions/setIncomesPerMonth';

const reducer = (
    state = initialState,
    {type, payload},
) => {
  switch (type) {
    case SET_IS_LOADING:
      return MutateIsLoading(state, payload);
    case SET_LOSSES_PER_MONTH:
      return MutateLossesPerMonth(state, payload);
    case SET_TOTAL_SUM:
      return MutateTotalSum(state, payload);
    case SET_INCOMES_PER_MONTH:
      return MutateIncomesPerMonth(state, payload);
    case SET_ERROR:
      return MutateError(state, payload);
    default:
      return state;
  }
};

export default reducer;