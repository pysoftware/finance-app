import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetTotalSum from './setTotalSum';
import SetError from './setError';
import firebase from '../../../api';
import SetIncomesPerMonth from './setIncomesPerMonth';
import SetLossesPerMonth from './setLossesPerMonth';

const InitWallet = () => async (dispatch) => {
  try {
    dispatch(SetIsLoading(true));
    const date = new Date();
    const {
      docs: costs,
    } = await firestore.collection('costs').
        where('date', '>=', firebase.firestore.Timestamp.fromDate(
            new Date(date.getFullYear(), date.getMonth(), 1)),
        ).where('date', '<=', firebase.firestore.Timestamp.fromDate(
            new Date(date.getFullYear(), date.getMonth(), 31)),
        ).get();
    const {
      docs: incomes,
    } = await firestore.collection('incomes').
        where('date', '>=', firebase.firestore.Timestamp.fromDate(
            new Date(date.getFullYear(), date.getMonth(), 1)),
        ).where('date', '<=', firebase.firestore.Timestamp.fromDate(
            new Date(date.getFullYear(), date.getMonth(), 31)),
        ).get();
    const {
      docs: allTimeIncomes,
    } = await firestore.collection('incomes').get();
    const totalLossesPerMonth = costs.reduce(
        (sum, item) => sum + item.data().sum, 0,
    );
    const totalIncomesPerMonth = incomes.reduce(
        (sum, item) => sum + item.data().sum, 0,
    );
    const totalSum = totalIncomesPerMonth - totalLossesPerMonth;

    dispatch(SetLossesPerMonth(totalLossesPerMonth));
    dispatch(SetIncomesPerMonth(totalIncomesPerMonth));
    dispatch(SetTotalSum(totalSum));
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('При загрузке данных произошла ошибка.'));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default InitWallet;