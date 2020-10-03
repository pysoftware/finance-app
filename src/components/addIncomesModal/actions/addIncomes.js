import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetError from './setError';
import SetIsShowing from './setIsShowing';
import firebase from '../../../api';
import InitWallet from '../../wallet/actions/init';

const AddIncomes = () => async (dispatch, getState) => {
  try {
    dispatch(SetIsLoading(true));
    const {
      addIncomesModal: {
        entity: {
          sum,
        },
      },
    } = getState();

    if (!+sum) {
      dispatch(SetError(
          'Некоректно заполнены поля',
      ));
      return;
    }

    await firestore.collection('incomes').doc().set({
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      sum: +sum,
    });

    dispatch(InitWallet());
    dispatch(SetIsLoading(false));
    dispatch(SetIsShowing());
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        'Ошибка добавления траты',
    ));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default AddIncomes;
