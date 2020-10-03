import SetIsShowing from './actions/setIsShowing';
import Init from './actions/init';
import AddIncomes from './actions/addIncomes';
import SetEntity from './actions/setEntity';

export const Dispatcher = dispatch => ({
  setIsShowing: () => dispatch(SetIsShowing()),
  addIncomes: () => dispatch(AddIncomes()),
  init: () => dispatch(Init()),
  onChangeEntity: (data) => dispatch(SetEntity(data)),
});

export default Dispatcher;