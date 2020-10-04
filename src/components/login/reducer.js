import initialState from './defaultState';
import {MutateIsLoading, SET_IS_LOADING} from './actions/setIsLoading';
import {MutateError, SET_ERROR} from './actions/setError';
import {MutateForm, SET_FORM} from './actions/setForm';

const reducer = (
    state = initialState,
    {type, payload},
) => {
  switch (type) {
    case SET_IS_LOADING:
      return MutateIsLoading(state, payload);
    case SET_FORM:
      return MutateForm(state, payload);
    case SET_ERROR:
      return MutateError(state, payload);
    default:
      return state;
  }
};

export default reducer;