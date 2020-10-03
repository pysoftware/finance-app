import update from 'immutability-helper';

export const SET_LOSSES_PER_MONTH = Symbol('SET_LOSSES_PER_MONTH');

export const SetLossesPerMonth = (lossesPerMonth) => ({
  type: SET_LOSSES_PER_MONTH,
  payload: lossesPerMonth,
});

export const MutateLossesPerMonth = (state, lossesPerMonth) => {
  return update(state, {
    lossesPerMonth: {$set: lossesPerMonth},
  });
};

export default SetLossesPerMonth;