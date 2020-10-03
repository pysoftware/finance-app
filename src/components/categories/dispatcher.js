import FetchCategories from './actions/fetchCategories';

export const Dispatcher = dispatch => ({
  fetchCategories: () => dispatch(FetchCategories()),
});

export default Dispatcher;