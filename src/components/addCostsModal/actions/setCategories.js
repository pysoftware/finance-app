import update from 'immutability-helper';

export const SET_CATEGORIES = Symbol('SET_CATEGORIES');

export const SetCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const MutateCategories = (state, categories) => {
  return update(state, {
    categories: {$set: categories},
  });
};

export default SetCategories;