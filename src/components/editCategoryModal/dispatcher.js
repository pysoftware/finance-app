import SetIsShowing from './actions/setIsShowing';
import Init from './actions/init';
import DeleteCosts from './actions/deleteCosts';
import EditCategory from './actions/editCategory';

export const Dispatcher = dispatch => ({
  setIsShowing: () => dispatch(SetIsShowing()),
  editCategory: (entityObj) => dispatch(EditCategory(entityObj)),
  deleteCosts: (costsId) => dispatch(DeleteCosts(costsId)),
  init: () => dispatch(Init()),
});

export default Dispatcher;