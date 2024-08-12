import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css'
import shopContext from '../context/shopContext';
import Rating from './Rating';

const SingleProduct = ({ product }) => {
    const { shop, dispatch } = useContext(shopContext)
    return (
        <div className='products'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>
                        {product.price}
                    {product.fastDelivery?<p style={{color:'red'}}>Fast Delivery</p>:<p style={{color:'green'}}>4 Days Delivery</p>}
                        <Rating rating={product.rating}/>
                    </Card.Text>
                    {shop.cart.some((p) => p.id === product.id) ?
                            (<Button variant="danger" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })}>Remove From Cart</Button>) :
                            (<Button variant="success" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}  disabled={product.inStock===0}>{product.inStock===0?'Out of Stock':'Add to cart'}</Button>)
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct