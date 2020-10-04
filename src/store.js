import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import firebase from 'Api';
import categoriesReducer from './components/categories/reducer';
import addCostsModalReducer from './components/addCostsModal/reducer';
import addCategoryModalReducer from './components/addCategoryModal/reducer';
import walletReducer from './components/wallet/reducer';
import addIncomesModalReducer from './components/addIncomesModal/reducer';
import editCategoryModalReducer from './components/editCategoryModal/reducer';
import editWalletModalReducer from './components/editWalletModal/reducer';
import loginReducer from './components/login/reducer';
import {
  firebaseReducer,
  getFirebase,
} from 'react-redux-firebase';
import {firestoreReducer, getFirestore} from 'redux-firestore';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  addCostsModal: addCostsModalReducer,
  addCategoryModal: addCategoryModalReducer,
  addIncomesModal: addIncomesModalReducer,
  wallet: walletReducer,
  editCategoryModal: editCategoryModalReducer,
  editWalletModal: editWalletModalReducer,
  login: loginReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({
              getFirebase,
              getFirestore,
            }),
        ),
    ),
);
