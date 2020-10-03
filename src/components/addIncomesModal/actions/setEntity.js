import update from 'immutability-helper';

export const SET_ENTITY = Symbol('SET_ENTITY');

export const SetEntity = (data) => ({
  type: SET_ENTITY,
  payload: data,
});

export const MutateEntity = (state, data) => {
  return update(state, {
    entity: {$merge: {...data}},
  });
};

export default SetEntity; 