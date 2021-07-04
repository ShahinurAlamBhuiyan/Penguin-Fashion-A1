import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from '../reducers/productReducer';


const combineReducer = combineReducers({

    products : productReducer

})

export const productStore = createStore(combineReducer, composeWithDevTools())