import React from 'react';
import HeaderSection from './HeaderSection/HeaderSection';
import ProductContainer from './ProductContainer/ProductContainer';

const Home = () => {
   

    return (
        <div>
            <div style={{ backgroundColor: '#d8cccc',  overflow: 'hidden' }}>
                <HeaderSection />
            </div>
            <ProductContainer />
        </div>
    );
};

export default Home;