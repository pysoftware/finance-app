import {firestore} from 'Api';
import SetIsLoadingIncomes from './setIsLoadingIncomes';
import SetError from './setError';
import FetchCategories from '../../categories/actions/fetchCategories';
import InitWallet from '../../wallet/actions/init';
import FetchIncomes from './fetchIncomes';

const DeleteIncomes = (incomesId) => async (dispatch, getState) => {
  try {
    dispatch(SetIsLoadingIncomes(true));

    await firestore.collection('incomes').doc(incomesId).delete();

    dispatch(FetchCategories());
    dispatch(InitWallet());
    dispatch(FetchIncomes());
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        'Ошибка удаления доходов',
    ));
  } finally {
    dispatch(SetIsLoadingIncomes(false));
  }
};

export default DeleteIncomes;
