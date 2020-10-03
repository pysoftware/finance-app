import SetError from './setError';
import FetchIncomes from './fetchIncomes';
import SetIsLoadingIncomes from './setIsLoadingIncomes';

const Init = () => async (dispatch) => {
  try {
    await dispatch(FetchIncomes());
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(
        SetError('Ошибка при загрузке данных для редактирования сущнности'),
    );
  } finally {
    dispatch(SetIsLoadingIncomes(false));
  }
};

export default Init;
