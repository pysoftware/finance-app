import {firestore} from 'Api';
import SetIsLoadingEntity from './setIsLoadingEntity';
import SetError from './setError';
import SetEntity from './setEntity';

const FetchEntity = (categoryId) => async (dispatch, getState) => {
  try {
    dispatch(SetIsLoadingEntity(true));

    const doc = await firestore.collection('categories').doc(categoryId).get();
    if (!doc.exists) {
      dispatch(SetError('Произошла ошибка. Такой категории не найдено.'));
      return;
    }

    dispatch(SetEntity({
      id: doc.id,
      title: doc.data().title.capitalize(),
      ...doc.data(),
    }));
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка сервера. Страница сейчас перезагрузится.'));
  } finally {
    dispatch(SetIsLoadingEntity(false));
  }
};

export default FetchEntity;