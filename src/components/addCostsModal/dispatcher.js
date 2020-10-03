import SetIsShowing from './actions/setIsShowing';
import Init from './actions/init';
import AddCosts from './actions/addCosts';
import SetEntity from './actions/setEntity';

export const Dispatcher = dispatch => ({
  setIsShowing: () => dispatch(SetIsShowing()),
  addCosts: () => dispatch(AddCosts()),
  init: () => dispatch(Init()),
  addCategory: () => dispatch(AddCosts()),
  onChangeEntity: (data) => dispatch(SetEntity(data)),
});

export default Dispatcher;