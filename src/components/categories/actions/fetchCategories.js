import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetCategories from './setCategories';
import SetError from './setError';

const FetchCategories = (
    {
      LoadCategories,
    },
) => () => async (dispatch, getState) => {
  try {
    dispatch(SetIsLoading(true));

    const {
      docs: categories,
    } = await LoadCategories;

    dispatch(SetCategories(categories));
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка сервера. Страница сейчас перезагрузится.'));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default FetchCategories({
  LoadCategories: firestore.collection('categories').get(),
});
