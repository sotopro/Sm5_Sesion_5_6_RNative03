import React, { useReducer } from 'react';
import { cartReducer, getTotal } from '../../reducers';
import './index.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 10
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 6
    },
]




const Product = () => {
    const [cart, setCart] = useReducer(cartReducer, []);

    const add = (product) => {
        setCart({product, type: 'add'});
    }

    const remove = (product) => {
        setCart({product, type: 'remove'});
    }
    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>
                Total: {getTotal(cart)}
            </div>
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.name}>
                        <span role="img" aria-label={product.name}>{product.emoji}</span>
                        <div className="button">
                            <button onClick={() => add(product)}>Add</button>
                            <button onClick={() => remove(product)}>Remove</button>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Product;