import {firestore} from 'Api';
import SetIsLoadingEntity from './setIsLoadingEntity';
import SetError from './setError';
import FetchCategories from '../../categories/actions/fetchCategories';
import InitWallet from '../../wallet/actions/init';
import FetchCosts from './fetchCosts';

const DeleteCosts = (costsId) => async (dispatch, getState) => {
  try {
    const {
      editCategoryModal: {
        entity: {
          id,
        },
      },
    } = getState();
    dispatch(SetIsLoadingEntity(true));

    await firestore.collection('costs').doc(costsId).delete();

    dispatch(FetchCategories());
    dispatch(InitWallet());
    dispatch(FetchCosts(id));
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        'Ошибка удаления траты',
    ));
  } finally {
    dispatch(SetIsLoadingEntity(false));
  }
};

export default DeleteCosts;
