import FetchCategories from './actions/fetchCategories';
import DeleteCategory from './actions/deleteCategory';

export const Dispatcher = dispatch => ({
  fetchCategories: () => dispatch(FetchCategories()),
  deleteCategory: (id) => dispatch(DeleteCategory(id)),
});

export default Dispatcher;