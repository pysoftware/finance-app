import update from 'immutability-helper';

export const SET_TOTAL_SUM = Symbol('SET_TOTAL_SUM');

export const SetTotalSum = (totalSum) => ({
  type: SET_TOTAL_SUM,
  payload: totalSum,
});

export const MutateTotalSum = (state, totalSum) => {
  return update(state, {
    totalSum: {$set: totalSum},
  });
};

export default SetTotalSum;