import Login from './actions/login';
import SetForm from './actions/setForm';

export const Dispatcher = dispatch => ({
  login: () => dispatch(Login()),
  onChangeForm: (data) => dispatch(SetForm(data)),
});

export default Dispatcher;