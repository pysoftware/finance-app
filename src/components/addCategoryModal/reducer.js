import initialState from './defaultState';
import {MutateIsShowing, SET_IS_SHOWING} from './actions/setIsShowing';
import {MutateEntity, SET_ENTITY} from './actions/setEntity';
import {MutateError, SET_ERROR} from './actions/setError';

const reducer = (
    state = initialState,
    {type, payload},
) => {
  switch (type) {
    case SET_IS_SHOWING:
      return MutateIsShowing(state, payload);
    case SET_ENTITY:
      return MutateEntity(state, payload);
    case SET_ERROR:
      return MutateError(state, payload);
    default:
      return state;
  }
};

export default reducer;