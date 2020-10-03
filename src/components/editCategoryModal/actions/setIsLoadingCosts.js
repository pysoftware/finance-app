import update from 'immutability-helper';

export const SET_IS_LOADING_COSTS = Symbol('SET_IS_LOADING_COSTS');

export const SetIsLoadingCosts = (isLoadingCosts) => ({
  type: SET_IS_LOADING_COSTS,
  payload: isLoadingCosts,
});

export const MutateIsLoadingCosts = (state, isLoadingCosts) => {
  return update(state, {
    isLoadingCosts: {$set: isLoadingCosts},
  });
};

export default SetIsLoadingCosts;