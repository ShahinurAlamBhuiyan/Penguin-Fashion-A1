import fakeProducts from '../../fakeData.json';
import { LOAD_PRODUCTS, ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../constant/actionTypes';

const initialState = {
    allProducts: fakeProducts,
    basketProducts: []
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_PRODUCTS: {
            const newState = { ...state, allProducts: action.payload };
            return newState;
        }

        case ADD_TO_BASKET:{
            let productExist = false;

            const newState = state.basketProducts.map((product) => {
                if (action.payload.id === product.id) {
                    productExist = true
                    return { ...product, count: product.count + 1 }
                } else {
                    return product;
                }
            })

            if (productExist) {
                return { ...state, basketProducts: newState }
            }
            else {
                return { ...state, basketProducts: [...state.basketProducts, action.payload] };
            }
        }
        
        case REMOVE_FROM_BASKET: {
            const newState = { ...state, basketProducts: state.basketProducts.filter(pd => pd.id !== action.payload.id) };
            return newState;
        }

        default: { { return state } }
    }
}

export default productReducer;