import SetIsShowingAddCostsModal from '../addCostsModal/actions/setIsShowing';
import SetIsShowingAddCategoryModal
  from '../addCategoryModal/actions/setIsShowing';

export const Dispatcher = dispatch => ({
  setIsShowingAddCostsModal: () => dispatch(SetIsShowingAddCostsModal()),
  setIsShowingAddCategoryModal: () => dispatch(SetIsShowingAddCategoryModal()),
});

export default Dispatcher;