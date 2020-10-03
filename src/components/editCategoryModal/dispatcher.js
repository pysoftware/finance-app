import SetIsShowing from './actions/setIsShowing';
import AddCategory from './actions/editCategory';
import SetEntity from './actions/setEntity';
import Init from './actions/init';

export const Dispatcher = dispatch => ({
  setIsShowing: () => dispatch(SetIsShowing()),
  addCategory: (docId, data) => dispatch(AddCategory(docId, data)),
  onChangeEntity: (data) => dispatch(SetEntity(data)),
  init: () => dispatch(Init()),
});

export default Dispatcher;