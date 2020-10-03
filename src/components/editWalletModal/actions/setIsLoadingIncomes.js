import update from 'immutability-helper';

export const SET_IS_LOADING_INCOMES = Symbol('SET_IS_LOADING_INCOMES');

export const SetIsLoadingIncomes = (isLoadingIncomes) => ({
  type: SET_IS_LOADING_INCOMES,
  payload: isLoadingIncomes,
});

export const MutateIsLoadingIncomes = (state, isLoadingIncomes) => {
  return update(state, {
    isLoadingIncomes: {$set: isLoadingIncomes},
  });
};

export default SetIsLoadingIncomes;