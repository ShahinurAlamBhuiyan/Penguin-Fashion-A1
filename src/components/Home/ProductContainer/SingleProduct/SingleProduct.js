import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBaskets } from '../../../../redux/actions/productAction';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SingleProduct.css';



const SingleProduct = (props) => {
    const { id, productName, productImg, productPrice } = props.product;
    const dispatch = useDispatch()
    const history = useHistory();
    return (
        <Card className='col-md-6 mainCard'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="340"
                    image={productImg}
                    title="product-image"
                />
                <CardContent  className="cardContent">
                    <Typography variant="h5" component="h5">
                        {productName}
                    </Typography>
                    <Typography variant="h5" component="h5">
                        $ {productPrice}
                    </Typography>
                </CardContent>

            </CardActionArea>
            <CardActions className="cardContent">
                <Button color="primary" variant="outlined" onClick={() => history.push(`product/${id}`)}>
                    Details
                </Button>
                <Button color="secondary" variant="outlined" onClick={() => dispatch(addToBaskets(props.product))}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default SingleProduct;