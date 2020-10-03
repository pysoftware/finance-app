import SetError from './setError';
import SetEntity from './setEntity';
import defaultState from '../defaultState';

const MakeEmptyEntity = () => async (dispatch) => {
  dispatch(SetError(null));
  dispatch(SetEntity(defaultState.entity));
};

export default MakeEmptyEntity;
