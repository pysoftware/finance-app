import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetError from './setError';
import SetIsShowing from './setIsShowing';
import FetchCategories from '../../categories/actions/fetchCategories';

const DeleteCosts = () => async (dispatch, getState) => {
  try {
    dispatch(SetIsLoading(true));

    const {
      editCategoryModal: {
        entity,
      },
    } = getState();
    const {sum_limit, title} = entity;
    if ((!title && title.length > 5) || (sum_limit !== 0 && !sum_limit)) {
      dispatch(SetError(
          `
          Неккоректно заполнены поля.
          Название должно быть больше 5 символов.
          `,
      ));
      return;
    }
    const response = await firestore.collection('categories').doc().set({
      title: title.toLowerCase(),
      sum_limit,
    });

    console.log(response);
    dispatch(FetchCategories());
    dispatch(SetIsLoading(false));
    dispatch(SetIsShowing());
  } catch (error) {
    console.error(error);
    dispatch(SetError(
        'Ошибка удаления траты',
    ));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default DeleteCosts;
