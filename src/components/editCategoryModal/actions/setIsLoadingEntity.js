import update from 'immutability-helper';

export const SET_IS_LOADING_ENTITY = Symbol('SET_IS_LOADING_ENTITY');

export const SetIsLoadingEntity = (isLoadingEntity) => ({
  type: SET_IS_LOADING_ENTITY,
  payload: isLoadingEntity
});

export const MutateIsLoadingEntity = (state, isLoadingEntity) => {
  return update(state, {
    isLoadingEntity: {$set: isLoadingEntity},
  });
}

export default SetIsLoadingEntity;