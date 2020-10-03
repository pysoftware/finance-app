import {
  MutateIsLoading,
  SET_IS_LOADING,
} from './actions/setIsLoading';
import initialState from './defaultState';
import {MutateError, SET_ERROR} from './actions/setError';
import {
  MutateCategories,
  SET_CATEGORIES,
} from './actions/setCategories';

const reducer = (
    state = initialState,
    {type, payload},
) => {
  switch (type) {
    case SET_IS_LOADING:
      return MutateIsLoading(state, payload);
    case SET_ERROR:
      return MutateError(state, payload);
    case SET_CATEGORIES:
      return MutateCategories(state, payload);
    default:
      return state;
  }
};

export default reducer;