import FetchCategories from './actions/fetchCategories';
import DeleteCategory from './actions/deleteCategory';
import InitEditCategoryModal from '../editCategoryModal/actions/init';

export const Dispatcher = dispatch => ({
  fetchCategories: () => dispatch(FetchCategories()),
  deleteCategory: (id) => dispatch(DeleteCategory(id)),
  onEditCategory: (id) => dispatch(InitEditCategoryModal(id)),
});

export default Dispatcher;