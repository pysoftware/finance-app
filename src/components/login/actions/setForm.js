import update from 'immutability-helper';

export const SET_FORM = Symbol('SET_FORM');

export const SetForm = (data) => ({
  type: SET_FORM,
  payload: data,
});

export const MutateForm = (state, data) => {
  return update(state, {
    form: {$merge: {...data}},
  });
};

export default SetForm;