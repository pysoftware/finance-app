import SetIsShowingAddCostsModal from '../addCostsModal/actions/setIsShowing';
import SetIsShowingAddCategoryModal
  from '../addCategoryModal/actions/setIsShowing';
import SetIsShowingAddIncomesModal
  from '../addIncomesModal/actions/setIsShowing';
import Logout from './actions/logout';

export const Dispatcher = dispatch => ({
  logout: () => dispatch(Logout()),
  setIsShowingAddCostsModal: () => dispatch(SetIsShowingAddCostsModal()),
  setIsShowingAddCategoryModal: () => dispatch(SetIsShowingAddCategoryModal()),
  setIsShowingAddIncomesModal: () => dispatch(SetIsShowingAddIncomesModal()),
});

export default Dispatcher;