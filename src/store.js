import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './components/categories/reducer';
import addCostsModalReducer from './components/addCostsModal/reducer';
import addCategoryModalReducer from './components/addCategoryModal/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  addCostsModal: addCostsModalReducer,
  addCategoryModal: addCategoryModalReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);
