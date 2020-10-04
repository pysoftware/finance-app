import {firestore} from 'Api';
import SetIsLoading from './setIsLoading';
import SetCategories from './setCategories';
import SetError from './setError';

const FetchCategories = () => async (dispatch, getState) => {
  try {
    const {
      firebase: {
        auth: {
          uid,
        },
      },
    } = getState();
    dispatch(SetIsLoading(true));

    const costsRef = firestore.collection('costs');
    const categories = [];

    await firestore.collection('categories').where(
        'userId',
        '==',
        firestore.doc(`users/${uid}`),
    ).get().then(
        async ({docs}) => {
          for (const doc of docs) {
            let costsSumPerMonth = 0;

            await costsRef.where(
                'categoryId',
                '==',
                firestore.doc(`categories/${doc.id}`),
            ).where(
                'userId',
                '==',
                firestore.doc(`users/${uid}`),
            ).get().then(snap => {
              snap.docs.forEach(item => costsSumPerMonth += item.data().sum);
            });

            categories.push({
              id: doc.id,
              costsSumPerMonth,
              ...doc.data(),
            });
          }
        },
    );

    dispatch(SetCategories(categories));
    dispatch(SetError(null));
  } catch (error) {
    console.error(error);
    dispatch(SetError('Ошибка сервера. Страница сейчас перезагрузится.'));
  } finally {
    dispatch(SetIsLoading(false));
  }
};

export default FetchCategories;