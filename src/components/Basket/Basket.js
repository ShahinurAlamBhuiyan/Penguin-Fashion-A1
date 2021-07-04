import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../../redux/actions/productAction';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Basket = () => {
    const baskets = useSelector((state) => {
        return state.products.basketProducts;
    })
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return (
        <div className='m-5' style={{ height: '55vh' }}>
            <h1 className="text-center">Your all added product</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '700' }}>Product Name</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Product Per Price</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Quantity</TableCell>
                            <TableCell style={{ fontWeight: '700' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            baskets.map(basket => (
                                <TableRow key={basket.id}>
                                    <TableCell>{basket.productName}</TableCell>
                                    <TableCell>{basket.productPrice}</TableCell>
                                    <TableCell>{basket.count}</TableCell>
                                    <TableCell onClick={() => dispatch(removeFromBasket(basket))}><BackspaceIcon /></TableCell>
                                    
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='text-center mt-3'>
                <Button variant='contained' color="secondary" onClick={() => alert('Your order is successfully completed')}>Checkout</Button>
            </div>
        </div>
    );
};

export default Basket;