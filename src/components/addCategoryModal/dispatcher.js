import SetIsShowing from './actions/setIsShowing';
import AddCategory from './actions/addCategory';
import SetEntity from './actions/setEntity';
import MakeEmptyEntity from './actions/makeEmptyEntity';

export const Dispatcher = dispatch => ({
  setIsShowing: () => dispatch(SetIsShowing()),
  addCategory: (docId, data) => dispatch(AddCategory(docId, data)),
  onChangeEntity: (data) => dispatch(SetEntity(data)),
  init: () => dispatch(MakeEmptyEntity()),
});

export default Dispatcher;