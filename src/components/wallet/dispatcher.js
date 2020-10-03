import Init from './actions/init';

export const Dispatcher = dispatch => ({
  init: () => dispatch(Init()),
});

export default Dispatcher;