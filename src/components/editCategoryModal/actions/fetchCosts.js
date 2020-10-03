import firebase, {firestore} from 'Api';
import SetError from './setError';
import SetCosts from './setCosts';
import SetIsLoadingCosts from './setIsLoadingCosts';

const FetchCosts = (categoryId) => async (dispatch) => {
  try {
    dispatch(SetIsLoadingCosts(true));
    const date = new Date();

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
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка сервера. Страница сейчас перезагрузится.'));
  } finally {
    dispatch(SetIsLoadingCosts(false));
  }
};

export default FetchCosts;