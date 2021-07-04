import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SingleProduct from './SingleProduct/SingleProduct';
import './ProductContainer.css';

const ProductContainer = () => {
    const history = useHistory();
    const basketClick = () => {
        history.push('/basket')
    }
    const products = useSelector((state) => {
        return state.products.allProducts;
    })
    const baskets = useSelector((state) => {
        return state.products.basketProducts;
    })
    return (
        <div>
            <div className="productContainer">
                <h2 className='p-3'>Exclusive products for you</h2>

                <div className='basketContainer' onClick={basketClick}>
                    <ShoppingBasketIcon style={{fontSize:'50px', marginLeft:'30px'}}></ShoppingBasketIcon>
                    <span className="basketCount">{baskets?.length}</span>
                </div>

            </div>

            <div className='singleProductDiv'>
                {
                    products.map((product) => <SingleProduct key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductContainer;