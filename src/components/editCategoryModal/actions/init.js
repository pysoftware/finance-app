import MakeEmptyEntity from './makeEmptyEntity';
import SetIsLoading from './setIsLoading';
import SetError from './setError';
import SetIsShowing from './setIsShowing';
import {firestore} from 'Api';
import SetCosts from './setCosts';
import SetEntity from './setEntity';
import firebase from '../../../api';

const Init = (categoryId) => async (dispatch) => {
  try {
    dispatch(SetIsShowing(true));
    dispatch(MakeEmptyEntity());
    dispatch(SetIsLoading(true));

    const date = new Date();
    const doc = await firestore.collection('categories').doc(categoryId).get();
    if (!doc.exists) {
      dispatch(SetError('Произошла ошибка. Такой категории не найдено.'));
      return;
    }

    const {
      docs: costsByCategory,
    } = await firestore.collection('costs').where(
        'categoryId',
        '==',
        firestore.doc(`categories/${categoryId}`),
    ).where('date', '>=', firebase.firestore.Timestamp.fromDate(
        new Date(date.getFullYear(), date.getMonth(), 1)),
    ).where('date', '<=', firebase.firestore.Timestamp.fromDate(
        new Date(date.getFullYear(), date.getMonth(), 31)),
    ).get();

    const mappedCostsByCategory = costsByCategory.map(item => ({
      id: item.id,
      ...item.data(),
    }));

    dispatch(SetCosts(mappedCostsByCategory));
    dispatch(SetEntity({
      id: doc.id,
      title: doc.data().title.capitalize(),
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    dispatch(
        SetError('Ошибка при загрузке данных для редактирования сущнности'),
    );
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default Init;
