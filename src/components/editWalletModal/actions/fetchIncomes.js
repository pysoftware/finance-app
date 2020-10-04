import firebase, {firestore} from 'Api';
import SetError from './setError';
import SetIncomes from './setIncomes';
import SetIsLoadingIncomes from './setIsLoadingIncomes';

const FetchIncomes = () => async (dispatch, getState) => {
  try {
    const {
      firebase: {
        auth: {
          uid,
        },
      },
    } = getState();
    dispatch(SetIsLoadingIncomes(true));
    const date = new Date();

    const {
      docs: incomes,
    } = await firestore.collection('incomes').where(
        'userId',
        '==',
        firestore.doc(`users/${uid}`),
    ).where('date', '>=', firebase.firestore.Timestamp.fromDate(
        new Date(date.getFullYear(), date.getMonth(), 1)),
    ).where('date', '<=', firebase.firestore.Timestamp.fromDate(
        new Date(date.getFullYear(), date.getMonth(), 31)),
    ).get();

    const mappedIncomes = incomes.map(item => ({
      id: item.id,
      ...item.data(),
    }));

    dispatch(SetIncomes(mappedIncomes));
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка сервера. Страница сейчас перезагрузится.'));
  } finally {
    dispatch(SetIsLoadingIncomes(false));
  }
};

export default FetchIncomes;