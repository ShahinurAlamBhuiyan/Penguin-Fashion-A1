import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import './ProductDetails.css';



const ProductDetails = () => {

    const products = useSelector((state) => {
        return state.products.allProducts;
    })
    
    const { productId } = useParams();
    const product = products.find(({ id }) => id === parseInt(productId));

    return (
        <Card className="rootCard">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="340"
                    image={product.productImg}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5" className="cardDetails">
                        <span>{product.productName}</span>
                        <span>$ {product.productPrice}</span>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">{product.productDetails}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductDetails;