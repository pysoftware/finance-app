import update from 'immutability-helper';

export const SET_INCOMES = Symbol('SET_INCOMES');

export const SetIncomes = (incomes) => ({
  type: SET_INCOMES,
  payload: incomes,
});

export const MutateIncomes = (state, incomes) => {
  return update(state, {
    incomes: {$set: incomes},
  });
};

export default SetIncomes;