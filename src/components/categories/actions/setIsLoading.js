import update from 'immutability-helper';

export const SET_IS_LOADING = Symbol('SET_IS_LOADING');

export const SetIsLoading = (loadingStatus) => ({
  type: SET_IS_LOADING,
  payload: {
    loadingStatus,
  },
});

export const MutateIsLoading = (state, {loadingStatus}) => update(state, {
  isLoading: {$set: loadingStatus},
});

export default SetIsLoading; 