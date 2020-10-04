import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetError from './setError';
import SetIsShowing from './setIsShowing';
import FetchCategories from '../../categories/actions/fetchCategories';

const AddCategory = () => async (dispatch, getState) => {
  try {
    dispatch(SetIsLoading(true));

    const {
      addCategoryModal: {
        entity,
      },
      firebase: {
        auth: {
          uid,
        },
      },
    } = getState();
    const {sum_limit, title} = entity;
    if ((!title && title.length < 5) || (sum_limit !== 0 && !sum_limit)) {
      dispatch(SetError(
          `
          Неккоректно заполнены поля.
          Название должно быть больше 5 символов.
          `,
      ));
      return;
    }
    await firestore.collection('categories').doc().set({
      title: title.toLowerCase(),
      sum_limit,
      userId: firestore.doc(`users/${uid}`),
    });

    dispatch(FetchCategories());
    dispatch(SetIsLoading(false));
    dispatch(SetIsShowing());
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        'Неккоректно заполнены поля',
    ));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default AddCategory;
