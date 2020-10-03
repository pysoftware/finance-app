import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './components/categories/reducer';
import addCostsModalReducer from './components/addCostsModal/reducer';
import addCategoryModalReducer from './components/addCategoryModal/reducer';
import walletReducer from './components/wallet/reducer';
import addIncomesModalReducer from './components/addIncomesModal/reducer';
import editCategoryModalReducer from './components/editCategoryModal/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  addCostsModal: addCostsModalReducer,
  addCategoryModal: addCategoryModalReducer,
  addIncomesModal: addIncomesModalReducer,
  wallet: walletReducer,
  editCategoryModal: editCategoryModalReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);
