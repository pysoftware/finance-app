import Init from './actions/init';
import SetIsShowingEditWalletModal from '../editWalletModal/actions/setIsShowing';

export const Dispatcher = dispatch => ({
  init: () => dispatch(Init()),
  onEditWallet: () => dispatch(SetIsShowingEditWalletModal()),
});

export default Dispatcher;