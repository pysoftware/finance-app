import SetIsShowingAddCostsModal from '../addCostsModal/actions/setIsShowing';
import SetIsShowingAddCategoryModal
  from '../addCategoryModal/actions/setIsShowing';
import SetIsShowingAddIncomesModal
  from '../addIncomesModal/actions/setIsShowing';

export const Dispatcher = dispatch => ({
  setIsShowingAddCostsModal: () => dispatch(SetIsShowingAddCostsModal()),
  setIsShowingAddCategoryModal: () => dispatch(SetIsShowingAddCategoryModal()),
  setIsShowingAddIncomesModal: () => dispatch(SetIsShowingAddIncomesModal()),
});

export default Dispatcher;