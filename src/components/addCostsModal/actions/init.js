import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetCategories from './setCategories';
import SetError from './setError';
import MakeEmptyEntity from './makeEmptyEntity';

const Init = () => async (dispatch, getState) => {
  try {
    const {
      firebase: {
        auth: {
          uid,
        },
      },
    } = getState();
    dispatch(MakeEmptyEntity());
    dispatch(SetIsLoading(true));
    const {
      docs: categories,
    } = await firestore.collection('categories').
        where(
            'userId',
            '==',
            firestore.doc(`users/${uid}`),
        ).get();

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
