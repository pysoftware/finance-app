import setError from './setError';
import setIsLoading from './setIsLoading';

const Login = () => async (dispatch, getState, {getFirebase, getFirestore}) => {
  try {
    dispatch(setIsLoading(true));
    const {
      login: {
        form: {
          email,
          password,
        },
      },
    } = getState();

    await getFirebase().login({
      email,
      password,
    });
  } catch (error) {
    console.error(error);
    dispatch(setError(
        'Произошла ошибка',
    ));
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default Login;