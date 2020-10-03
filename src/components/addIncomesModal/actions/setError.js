import update from 'immutability-helper';

export const SET_ERROR = Symbol('SET_ERROR');

export const SetError = (message) => ({
  type: SET_ERROR,
  payload: message,
});

export const MutateError = (state, message) => update(state, {
  error: {$set: message},
});

export default SetError;