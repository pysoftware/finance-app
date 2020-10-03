import SetIsShowing from './actions/setIsShowing';
import Init from './actions/init';
import DeleteIncomes from './actions/deleteIncomes';

export const Dispatcher = dispatch => ({
  setIsShowing: () => dispatch(SetIsShowing()),
  deleteIncomes: (costsId) => dispatch(DeleteIncomes(costsId)),
  init: () => dispatch(Init()),
});

export default Dispatcher;