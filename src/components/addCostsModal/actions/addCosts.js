import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetError from './setError';
import SetIsShowing from './setIsShowing';
import FetchCategories from '../../categories/actions/fetchCategories';
import firebase from '../../../api';
import InitWallet from '../../wallet/actions/init';
import FetchCosts from '../../editCategoryModal/actions/fetchCosts';

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
      editCategoryModal: {
        isShowing: isShowingEditCategoryModal,
        entity: {
          id,
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
      categoryId: firestore.doc(`categories/${categoryId}`),
    });

    dispatch(FetchCategories());
    dispatch(InitWallet());
    dispatch(SetIsLoading(false));
    dispatch(SetIsShowing());
    if (isShowingEditCategoryModal && id) {
      dispatch(FetchCosts(id));
    }
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
