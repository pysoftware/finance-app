import update from 'immutability-helper';

export const SET_COSTS = Symbol('SET_COSTS');

export const SetCosts = (costs) => ({
  type: SET_COSTS,
  payload: costs,
});

export const MutateCosts = (state, costs) => {
  return update(state, {
    costs: {$set: costs},
  });
};

export default SetCosts;