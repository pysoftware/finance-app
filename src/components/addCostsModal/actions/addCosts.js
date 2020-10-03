import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetError from './setError';
import SetIsShowing from './setIsShowing';
import FetchCategories from '../../categories/actions/fetchCategories';
import firebase from '../../../api';

const AddCosts = () => async (dispatch, getState) => {
  try {
    dispatch(SetIsLoading(true));
    const {
      addCostsModal: {
        entity: {
          sum,
          categoryId,
        },
      },
    } = getState();

    if ((+sum !== 0 && !+sum) || !categoryId) {
      dispatch(SetError(
          'Некоректно заполнены поля',
      ));
      return;
    }

    await firestore.collection('costs').doc().set({
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      sum: +sum,
      categoryId,
    });

    dispatch(FetchCategories());
    dispatch(SetIsShowing());
    dispatch(SetIsLoading(false));
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        'Ошибка добавления траты',
    ));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default AddCosts;
