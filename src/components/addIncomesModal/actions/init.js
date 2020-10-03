import MakeEmptyEntity from './makeEmptyEntity';
import SetIsLoading from './setIsLoading';

const Init = () => async (dispatch) => {
  dispatch(SetIsLoading(false));
  dispatch(MakeEmptyEntity());
};

export default Init;
