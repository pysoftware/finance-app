import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetCategories from './setCategories';
import SetError from './setError';

const FetchCategories = () => async (dispatch) => {
  try {
    dispatch(SetIsLoading(true));

    const {
      docs: categories,
    } = await firestore.collection('categories').get();

    dispatch(SetCategories(categories));
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка сервера. Страница сейчас перезагрузится.'));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default FetchCategories;