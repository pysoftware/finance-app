import {firestore} from 'Api';
import SetIsLoadingEntity from './setIsLoadingEntity';
import SetError from './setError';
import FetchCategories from '../../categories/actions/fetchCategories';

const EditCategory = (entityObj) => async (dispatch, getState) => {
  try {
    const {
      firebase: {
        auth: {
          uid,
        },
      },
    } = getState();
    dispatch(SetIsLoadingEntity(true));

    const {id, sum_limit, title} = entityObj;
    if ((!title && title.length < 5) || (sum_limit !== 0 && !sum_limit)) {
      dispatch(SetError(
          `
          Неккоректно заполнены поля.
          Название должно быть больше 5 символов.
          `,
      ));
      return;
    }
    await firestore.collection('categories').doc(id).set({
      title: title.toLowerCase(),
      sum_limit,
      userId: firestore.doc(`users/${uid}`),
    });

    dispatch(FetchCategories());
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        'Неккоректно заполнены поля',
    ));
  } finally {
    dispatch(SetIsLoadingEntity(false));
  }
};

export default EditCategory;
