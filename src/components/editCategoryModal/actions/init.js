import MakeEmptyEntity from './makeEmptyEntity';
import SetError from './setError';
import SetIsShowing from './setIsShowing';
import FetchCosts from './fetchCosts';
import FetchEntity from './fetchEntity';

const Init = (categoryId) => async (dispatch) => {
  try {
    dispatch(SetIsShowing());
    dispatch(MakeEmptyEntity());
    await dispatch(FetchEntity(categoryId));
    await dispatch(FetchCosts(categoryId));
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(
        SetError('Ошибка при загрузке данных для редактирования сущнности'),
    );
  }
};

export default Init;
