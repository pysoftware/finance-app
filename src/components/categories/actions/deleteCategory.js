import {firestore} from 'Api';
import SetError from './setError';
import FetchCategories from './fetchCategories';

const DeleteCategory = (id) => async (dispatch) => {
  try {

    const value = await firestore.collection('categories').doc(id).delete();

    console.log(value);
    dispatch(FetchCategories());
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка удаления категории'));
  }
};

export default DeleteCategory;