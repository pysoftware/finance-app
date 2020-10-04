import update from 'immutability-helper';

export const SET_IS_LOADING = Symbol('SET_IS_LOADING');

export const SetIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading
});

export const MutateIsLoading = (state, isLoading) => {
  return update(state, {
    isLoading: {$set: isLoading},
  });
}

export default SetIsLoading; 