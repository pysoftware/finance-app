import {firestore} from 'Api';
import SetError from './setError';
import FetchCategories from './fetchCategories';
import InitWallet from '../../wallet/actions/init';

const DeleteCategory = (id) => async (dispatch) => {
  try {
    const batch = firestore.batch();

    const costsRef = await firestore.collection('costs').where(
        'categoryId',
        '==',
        firestore.doc(`categories/${id}`),
    ).get();
    costsRef.forEach(doc => {
      batch.delete(doc.ref);
    });

    await firestore.collection('categories').doc(id).delete();
    await batch.commit();

    dispatch(InitWallet());
    dispatch(FetchCategories());
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка удаления категории'));
  }
};

export default DeleteCategory;