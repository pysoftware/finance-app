import update from 'immutability-helper';

export const SET_IS_SHOWING = Symbol('SET_IS_SHOWING');

export const SetIsShowing = () => ({
  type: SET_IS_SHOWING,
  payload: null,
});

export const MutateIsShowing = (state) => {
  return update(state, {
    isShowing: {$set: !state.isShowing},
  });
};

export default SetIsShowing;