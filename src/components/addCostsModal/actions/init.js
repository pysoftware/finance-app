import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetCategories from './setCategories';
import SetError from './setError';
import MakeEmptyEntity from './makeEmptyEntity';

const Init = () => async (dispatch) => {
  try {
    dispatch(MakeEmptyEntity());
    dispatch(SetIsLoading(true));
    const {
      docs: categories,
    } = await firestore.collection('categories').get();

    dispatch(SetCategories(categories));
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        `
          Ошибка сервера.
          Обратитесь к администратору или попробуйте обновить страницу.
        `,
    ));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default Init;
