import update from 'immutability-helper';

export const SET_INCOMES_PER_MONTH = Symbol('SET_INCOMES_PER_MONTH');

export const SetIncomesPerMonth = (incomesPerMonth) => ({
  type: SET_INCOMES_PER_MONTH,
  payload: incomesPerMonth,
});

export const MutateIncomesPerMonth = (state, incomesPerMonth) => {
  return update(state, {
    incomesPerMonth: {$set: incomesPerMonth},
  });
};

export default SetIncomesPerMonth;