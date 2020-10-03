import initialState from './defaultState';
import {MutateIsShowing, SET_IS_SHOWING} from './actions/setIsShowing';
import {MutateEntity, SET_ENTITY} from './actions/setEntity';
import {MutateError, SET_ERROR} from './actions/setError';
import {MutateCosts, SET_COSTS} from './actions/setCosts';
import {
  MutateIsLoadingEntity,
  SET_IS_LOADING_ENTITY,
} from './actions/setIsLoadingEntity';
import {
  MutateIsLoadingCosts,
  SET_IS_LOADING_COSTS,
} from './actions/setIsLoadingCosts';

const reducer = (
    state = initialState,
    {type, payload},
) => {
  switch (type) {
    case SET_IS_SHOWING:
      return MutateIsShowing(state, payload);
    case SET_IS_LOADING_ENTITY:
      return MutateIsLoadingEntity(state, payload);
    case SET_IS_LOADING_COSTS:
      return MutateIsLoadingCosts(state, payload);
    case SET_ENTITY:
      return MutateEntity(state, payload);
    case SET_ERROR:
      return MutateError(state, payload);
    case SET_COSTS:
      return MutateCosts(state, payload);
    default:
      return state;
  }
};

export default reducer;